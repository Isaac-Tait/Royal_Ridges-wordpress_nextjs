import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Royal Ridges',
  description:
    'Royal Ridges Retreat in Southern Washington privacy policy',
};

export default function Privacy() {
  return (
    <div className='bg-gradient-to-l from-yellow-200 to-green-200'>
      <meta
        name='algolia-site-verification'
        content='87E6CF323EB243CC'
      />
      <Header />
      <div className='max-w-6xl mx-auto'>
        <p>
          At Royal Ridges Camps, we value and respect your privacy. We
          are committed to safeguarding your privacy and ensuring that
          your personal information is handled securely and
          responsibly. This Privacy Policy outlines how we collect,
          use, and protect your personal information that you provide
          to us, particularly in relation to our SMS services. Please
          take a moment to read this Privacy Policy to understand our
          practices.
        </p>
        <p>
          INFORMATION WE COLLECT We collect personal information that
          you voluntarily provide to us when you interact with our
          website, subscribe to our SMS services, or engage with our
          customer support. This may include, but is not limited to:
          Contact Information: Your name, phone number, and email
          address. SMS information: any content or details you provide
          when opting into our SMS services.
        </p>
        <p>
          HOW WE USE YOUR INFORMATION The information we collect is
          use solely for the following purposes: To communicate with
          your through SMS or other communication methods, including
          sending updates, promotions, and other relevant information.
          To improve our services and tailor our communications to
          meet your preferences. To respond to customer service
          inquiries.
        </p>
        <p>
          OPT-IN SMS INFORMATION Royal Ridges Camps values your
          privacy and is commuted to not sharing, selling, or
          otherwise disclosing your opted-in SMS informations to third
          parties. Your phone number and any information related to
          your SMS subscription will not be shared with any external
          entities, unless required by law or in connection with a
          legal obligation. DATA SECURITY We implement reasonable
          security measures to protect your personal information from
          unauthorized access, disclosure, alteration, or destruction.
          While we take steps to protect your data, please note that
          no method of electronic transmission or storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>
        <p>
          COOKIES AND TRACKING TECHNOLOGIES We may use cookies and
          other tracking technologies to improve the functionality and
          performance of our website. These technologies help us
          personalize your experience and track your preferences. You
          can manage your cookie settings through your browser
          preferences.
        </p>
        <p>
          YOUR RIGHTS You have the right to access, correct, and
          delete any personal information we have about you. If you
          wish to unsubscribe from our SMS services or change your
          communication preferences, please follow the opt-out
          instructions included in our SMS messages or contact us
          directly at joshua@royalridges.org.
        </p>
        <p>
          INFORMATION SHARING We respect your privacy and will not
          sell, rent, or disclose your personal information to third
          parties without your consent, except in the following cases:
          Service Providers: We may engage trusted third-party service
          providers to assist us in delivering our services,
          processing payments, or managing our website. These service
          providers have access to your personal information solely
          for the purpose of performing the requested tasks on our
          behalf and are obligated to protect your information. Legal
          Compliance: We may disclose your personal information if
          required by law, regulation, legal process, or governmental
          request, including compliance with the California Consumer
          Privacy Act (CCPA).
        </p>
        <p>
          THIRD-PARTY WEBSITES Our website and communications may
          contain links to third-party websites. These websites have
          their own privacy policies, which are not covered by this
          Privacy Policy. We encourage you to review the privacy
          policies of those third-party websites before providing any
          personal information. UPDATES TO THE PRIVACY POLICY We
          reserve the right to update or modify this Privacy Policy at
          any time without prior notice. Any changes made to the
          Privacy Policy will be effective from the date of
          publication on our website. CONTACT US If you have any
          questions or concerns regarding our Privacy Policy, please
          email us at{' '}
          <a
            href='mailto:joshua@royalridges.org'
            className='text-green-200 hover:underline hover:text-indigo-400'
          >
            joshua@royalridges.org
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
