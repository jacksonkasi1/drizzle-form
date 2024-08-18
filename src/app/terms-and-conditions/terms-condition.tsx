/* eslint-disable react/no-unescaped-entities */

// import core package
import Link from "next/link";

const TermsConditions = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Terms and Conditions</h1>
      <br />
      <div>
        <p className="text-lg font-semibold text-black">
          1. Acceptance of Terms
        </p>
        <p className="pt-2">
          By using this App ("the App"), you agree to these Terms and Conditions
          ("Terms"). If you do not agree, please do not use the App.
        </p>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">2. User Obligations</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            Compliance: Use the App according to all applicable rules and these
            Terms.
          </li>
          <li>
            Account Information: Ensure your account details are correct and
            secure.
          </li>
          <li>
            <p>Prohibited Activities:</p>
            <ul className="list-disc ml-5">
              <li>Do not use the App for any illegal activities.</li>
              <li>Do not interfere with the App's functionality.</li>
              <li>Do not transmit harmful code.</li>
              <li>
                Avoid activities that could negatively impact other users.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">
          3. Content and Intellectual Property
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            App Content: The content within the App belongs to the App's
            organization or its licensors.
          </li>
          <li>
            User-Generated Content: By submitting content, you give the App's
            organization permission to use it.
          </li>
          <li>
            Restrictions: You may not reproduce or distribute the App's content
            without permission.
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">4. Account Management</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            Account Creation: You need an account to use certain features of the
            App.
          </li>
          <li>
            Account Termination: The organization can terminate your account if
            you violate these Terms.
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">5. Privacy Policy</p>
        <p className="pt-2">
          Please refer to the Privacy Policy for details on data collection and
          usage.
        </p>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">
          6. Modifications to the App and Terms
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            App Updates: The organization may update the App to improve its
            features.
          </li>
          <li>
            Changes to Terms: The organization may change these Terms and notify
            you of those changes.
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">
          7. Limitation of Liability
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            No Warranties: The App is provided "as is" without warranties.
          </li>
          <li>
            Limited Liability: The organization is not responsible for any
            damages related to your use of the App.
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">
          8. Governing Law and Dispute Resolution
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>Governing Law: These Terms are governed by local laws.</li>
          <li>
            Dispute Resolution: Any disputes will be resolved through
            arbitration.
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">
          9. Contact Information
        </p>
        <p className="pt-2">
          For questions, please contact us at{" "}
          <Link href={"mailto:info@example.com"} className="text-vvp-primary">
            info@example.com
          </Link>
        </p>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">10. Termination</p>
        <p className="pt-2">
          The organization can terminate your access to the App at any time.
        </p>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold text-black">11. Miscellaneous</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            Severability: If any part of these Terms is invalid, the rest will
            still apply.
          </li>
          <li>
            Entire Agreement: These Terms are the entire agreement between you
            and the organization regarding the App.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsConditions;
