import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend lazily to avoid build-time errors
function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    console.log('Verifying Turnstile token...')
    console.log('Secret key present:', !!process.env.TURNSTILE_SECRET_KEY)

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
    console.log('Turnstile verification response:', data)

    if (!data.success) {
      console.error('Turnstile verification failed:', data['error-codes'])
    }

    return data.success === true
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
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

    // Send email notification
    console.log('Attempting to send email via Resend...')
    console.log('Resend API key present:', !!process.env.RESEND_API_KEY)
    console.log('Recipient email:', 'daniel@chiliz.com')

    const resend = getResend()
    let emailSuccess = false
    let emailError: any = null

    try {
      const emailResult = await resend.emails.send({
        from: 'Chiliz Sports Contact Form <onboarding@resend.dev>',
        to: 'daniel@chiliz.com',
        subject: 'New Contact Form Submission - Chiliz Sports',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Agreed to Terms:</strong> Yes</p>
          <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
        `,
        replyTo: email,
      })

      console.log('Email sent successfully via Resend:', emailResult)
      emailSuccess = true
    } catch (error: any) {
      console.error('Failed to send email via Resend:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      emailError = error.message || 'Unknown error'
    }

    console.log('Contact form submission processed:', {
      fullName,
      email,
      agreeToTerms,
      emailSuccess,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission. We will be in touch soon!',
        debug: {
          emailSent: emailSuccess,
          emailError: emailError
        }
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
