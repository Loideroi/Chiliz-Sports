export const metadata = {
  title: 'Legal Notice | Chiliz Sports',
  description: 'Legal notice and terms of use for Chiliz Sports website. Information about intellectual property, liabilities, governing law and website usage conditions.',
}

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8" style={{ color: 'rgb(38, 10, 64)' }}>
          Legal Notice
        </h1>

        <div className="prose prose-lg max-w-none space-y-6" style={{ color: 'rgb(38, 10, 64)' }}>
          <p>
            This Legal Notice governs the use of the website www.chiliz-sports.com/ (hereinafter referred to as the &quot;Website&quot;), owned by the Chiliz Group Limited (hereinafter referred to as the &quot;Company&quot;), with registered office at Level 6, Wembley Business Centre, 179, Rue D&apos;Argens, Msida MSD 1360 (Malta) and contact email: legal@chiliz.com.
          </p>

          <p>
            By using the Website, you accept all the terms set forth in this Legal Notice. If you do not agree to these terms, you must refrain from accessing or using the services and content provided on the Website and leave immediately.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">USE OF THE WEBSITE</h2>
          <p>
            Users must not use the Website for activities that violate applicable laws, moral standards, public order, or the conditions established in this Legal Notice.
          </p>

          <p>
            The Company reserves the right to suspend Website access with any user who engages in activities that it deems contrary to the terms of this Legal Notice.
          </p>

          <p>
            The Company does not guarantee that the Website&apos;s content is accurate or error-free. The use of the Website and its content is the sole responsibility of the user.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">INTELLECTUAL AND INDUSTRIAL PROPERTY</h2>
          <p>
            The Website contains original content created by the Company, including text, images, trademarks, domain names, graphics, logos, buttons, software files, color combinations, as well as the structure, selection, arrangement, and presentation of its contents. These elements are the property of the Company and are protected by Intellectual Property laws. Any reproduction, distribution, public communication, or transformation of this content is strictly prohibited. Therefore, the reproduction, retransmission, copying, transfer, redistribution, reverse engineer, modify, disassemble, decompile or create derivative works from the content in whole or in part, of the information contained on the Website, regardless of the purpose and means used, is prohibited without the Company&apos;s prior authorization.
          </p>

          <p>
            The Website may also include third-party content that is used under a license or authorization from the respective owner. The reproduction, retransmission, copying, transfer, or redistribution of such content is prohibited without prior authorization from the owners.
          </p>

          <p>
            Reference to any products, services, processes or other information by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation by us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">LINKS TO THIRD-PARTY WEBSITES</h2>
          <p>
            The Website may contain links to third-party websites. These external sites have not been reviewed or are not subject to monitoring by the Company. Therefore, the Company is not responsible for the content of these external sites or for any privacy or data protection measures they may apply.
          </p>

          <p>
            Users are encouraged to carefully review the terms of use and privacy policies of any third-party websites they visit.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">LIABILITIES</h2>
          <p>The Company is not directly or indirectly responsible for:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>The quality of service, access speed, proper functioning, availability, or continuity of the Website.</li>
            <li>Any damage to users&apos; devices resulting from the use of the Website.</li>
            <li>Unauthorized third-party access to messages or the distribution of computer viruses.</li>
            <li>Defects or flaws in the content transmitted, disseminated, stored, or made available through the Website.</li>
            <li>The legality, reliability, or usefulness of the content shared by users through the Website or the services offered therein, as well as its truthfulness or accuracy.</li>
            <li>The Company does not monitor user activities on the Website or guarantee compliance with this Legal Notice.</li>
            <li>The accuracy of legal information found on the Website, particularly blog entries, which should be understood as personal opinions and are not legally binding.</li>
          </ul>

          <p className="mt-4">
            Users are responsible for engaging in any unlawful, harmful, or rights-infringing activities when accessing the Website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">GOVERNING LAW AND JURISDICTION</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of the Republic of Malta. Any disputes arising out of or in connection with this Agreement, including any question regarding its existence, validity or termination, shall be referred to and finally resolved by means of arbitration in Malta in accordance with the Arbitration Rules laid down in the Arbitration Act, Chapter 387 of the laws of Malta from the time being in force.
          </p>
        </div>
      </div>
    </div>
  )
}
