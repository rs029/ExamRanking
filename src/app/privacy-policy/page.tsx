import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Exam Ranking',
  description: 'Learn how Exam Ranking protects your privacy and handles your personal information when using our rank calculation services.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                When you use Exam Ranking, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Result documents and files you upload for rank calculation</li>
                <li>URLs of result pages you provide</li>
                <li>Basic usage analytics and performance metrics</li>
                <li>Contact information when you reach out to support</li>
                <li>Technical information like IP address and browser type</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Processing and calculating your exam ranks</li>
                <li>Providing accurate performance analysis</li>
                <li>Improving our calculation algorithms and services</li>
                <li>Responding to support requests and inquiries</li>
                <li>Ensuring the security and integrity of our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We take data security seriously and implement appropriate measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All data transmission is encrypted using SSL/TLS protocols</li>
                <li>Uploaded files are processed in secure, isolated environments</li>
                <li>Personal data is automatically deleted after processing</li>
                <li>We use industry-standard security practices and regular audits</li>
                <li>Access to data is restricted to authorized personnel only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We follow a strict data retention policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Uploaded files and result data are deleted immediately after processing</li>
                <li>Calculation results are not stored permanently on our servers</li>
                <li>Analytics data is anonymized and retained for service improvement</li>
                <li>Contact information is retained only as long as necessary for support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services to enhance our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Analytics services for understanding user behavior (anonymized)</li>
                <li>Cloud hosting providers with appropriate security measures</li>
                <li>Email services for communication and support</li>
                <li>Payment processors for premium services (if applicable)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Right to access information we have about you</li>
                <li>Right to correct or update your personal information</li>
                <li>Right to delete your personal information</li>
                <li>Right to object to processing of your personal information</li>
                <li>Right to data portability where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve user experience and platform performance</li>
                <li>Provide personalized content and features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our service is intended for students of all ages. For users under 13, we require parental consent 
                and take additional measures to protect children's privacy in accordance with applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@examranking.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Education Street, New York, NY 10001
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
