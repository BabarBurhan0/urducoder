import LegalLayout from "@/components/LegalLayout";

export const metadata = {
  title: "Terms of Service",
  description:
    "UrduCoder ki Terms of Service — janein hamari website use karne ki shart aur conditions.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 2, 2026">
      <p>
        Welcome to UrduCoder! These Terms of Service (&quot;Terms&quot;) govern your use of our website
        located at urducoder.com (the &quot;Service&quot;) operated by UrduCoder (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
      </p>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you disagree
        with any part of the terms, then you may not access the Service.
      </p>

      <h2>1. Use of Content</h2>
      <p>
        All content provided on this website is for informational and educational purposes only.
        We make every effort to ensure the accuracy of the information; however, we make no
        warranties about the completeness, reliability, or accuracy of the content.
      </p>
      <p>
        You may share, link to, or reference our content with proper attribution. However, you
        may not republish full articles without our written consent.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The Service and its original content (excluding content provided by users), features,
        and functionality are and will remain the exclusive property of UrduCoder and its
        licensors. The Service is protected by copyright, trademark, and other laws.
      </p>
      <p>
        Our trademarks may not be used in connection with any product or service without the
        prior written consent of UrduCoder.
      </p>

      <h2>3. User Content</h2>
      <p>
        If you submit comments, suggestions, ideas, or other content to UrduCoder, you grant us
        a worldwide, royalty-free, perpetual license to use, reproduce, modify, adapt, publish,
        and distribute such content.
      </p>
      <p>
        You agree not to submit content that is unlawful, defamatory, abusive, hateful, or
        otherwise objectionable.
      </p>

      <h2>4. Links To Other Websites</h2>
      <p>
        Our Service may contain links to third-party websites or services that are not owned or
        controlled by UrduCoder. We have no control over, and assume no responsibility for, the
        content, privacy policies, or practices of any third-party websites or services.
      </p>
      <p>
        You acknowledge and agree that UrduCoder shall not be liable for any damage or loss
        caused by use of any such third-party content or services.
      </p>

      <h2>5. Disclaimer of Warranties</h2>
      <p>
        Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot;
        and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind,
        whether express or implied.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        In no event shall UrduCoder, nor its directors, employees, partners, agents, suppliers,
        or affiliates, be liable for any indirect, incidental, special, consequential or
        punitive damages, including without limitation, loss of profits, data, use, goodwill,
        or other intangible losses, resulting from your access to or use of or inability to
        access or use the Service.
      </p>

      <h2>7. Code Examples</h2>
      <p>
        Any code samples provided on UrduCoder are for educational purposes. Use them at your
        own risk. We are not responsible for any damages or issues that arise from using our
        code in your projects. Always test thoroughly before using in production.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any
        time. By continuing to access or use our Service after revisions become effective, you
        agree to be bound by the revised terms.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may terminate or suspend your access immediately, without prior notice or liability,
        for any reason whatsoever, including without limitation if you breach the Terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of Pakistan,
        without regard to its conflict of law provisions.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>By email: hello@urducoder.com</li>
        <li>
          By visiting our contact page: <a href="/contact">urducoder.com/contact</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
