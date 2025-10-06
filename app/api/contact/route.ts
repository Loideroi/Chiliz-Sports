import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
    }),
  })

  const data = await response.json()
  return data.success === true
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, agreeToTerms, turnstileToken } = body

    // Validate the data
    if (!fullName || !email || !agreeToTerms) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Spam protection verification required' },
        { status: 400 }
      )
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken)
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Spam protection verification failed. Please try again.' },
        { status: 400 }
      )
    }

    // Send email notification to mark@chiliz.com
    await resend.emails.send({
      from: 'Chiliz Sports Contact Form <noreply@chiliz-sports.com>',
      to: 'mark@chiliz.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Agreed to Terms:</strong> Yes</p>
        <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
      `,
    })

    console.log('Contact form submission sent to mark@chiliz.com:', {
      fullName,
      email,
      agreeToTerms,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission. We will be in touch soon!'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
