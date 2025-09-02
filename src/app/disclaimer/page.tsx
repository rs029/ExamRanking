import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - Exam Ranking',
  description: 'Important disclaimers regarding the use of Exam Ranking\'s rank calculation services and accuracy of results.',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                The information provided by Exam Ranking ("we," "us," or "our") on our website and through our services 
                is for general informational and educational purposes only. All information on the site and our services 
                is provided in good faith, however we make no representation or warranty of any kind, express or implied, 
                regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information 
                on the site or our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rank Calculation Accuracy</h2>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate rank calculations and performance analysis:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our calculations are estimates based on available data and algorithms</li>
                <li>Official exam results and ranks may differ from our calculations</li>
                <li>We do not have access to official normalization formulas used by exam conducting bodies</li>
                <li>Results are subject to change based on updated data and improved algorithms</li>
                <li>We cannot guarantee the accuracy of third-party data sources we may use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Educational Purpose Only</h2>
              <p className="text-gray-700 mb-4">
                Our services are intended for educational and informational purposes only:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Results should not be used as the sole basis for important decisions</li>
                <li>We do not provide official exam results or certifications</li>
                <li>Our analysis does not replace official counseling or guidance services</li>
                <li>Users should verify all information with official sources</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Admission Guarantee</h2>
              <p className="text-gray-700 mb-4">
                Important points regarding admissions and selections:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Our rank calculations do not guarantee admission to any institution</li>
                <li>Admission processes involve multiple factors beyond exam scores</li>
                <li>Cutoff marks and selection criteria may vary by institution and category</li>
                <li>We are not affiliated with any exam conducting body or educational institution</li>
                <li>Final admission decisions rest solely with the respective institutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links and Content</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites or services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We do not control or endorse third-party content</li>
                <li>Links are provided for convenience and informational purposes only</li>
                <li>We are not responsible for the content, privacy policies, or practices of third-party sites</li>
                <li>Users access third-party content at their own risk</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Limitations</h2>
              <p className="text-gray-700 mb-4">
                Please be aware of the following technical limitations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Service availability may be subject to maintenance and technical issues</li>
                <li>File processing capabilities may have limitations based on format and size</li>
                <li>Calculation algorithms are continuously updated and improved</li>
                <li>Past performance of our calculations does not guarantee future accuracy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Advice</h2>
              <p className="text-gray-700 mb-4">
                Our services do not constitute professional advice:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We do not provide official academic counseling</li>
                <li>Career guidance should be sought from qualified professionals</li>
                <li>Important educational decisions should involve consultation with experts</li>
                <li>Our analysis is supplementary to, not a replacement for, professional guidance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Under no circumstances shall we be liable for any direct, indirect, special, incidental, or consequential 
                damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Loss of admission opportunities</li>
                <li>Financial losses</li>
                <li>Emotional distress</li>
                <li>Loss of time or effort</li>
                <li>Any other damages arising from the use of our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates and Changes</h2>
              <p className="text-gray-700 mb-4">
                This disclaimer may be updated from time to time to reflect changes in our services or legal requirements. 
                Users are encouraged to review this page periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this disclaimer, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@examranking.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Education Street, New York, NY 10001
                </p>
              </div>
            </section>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Always verify results with official sources before making important decisions. 
                    Our calculations are estimates and should be used as guidance only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
