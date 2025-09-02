import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy - Exam Ranking',
  description: 'Learn about Exam Ranking\'s refund policy for premium services and rank calculation features.',
}

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                At Exam Ranking, we strive to provide high-quality rank calculation services. This refund policy 
                outlines the circumstances under which refunds may be provided for our premium services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Free Services</h2>
              <p className="text-gray-700 mb-4">
                Our basic rank calculation services are provided free of charge:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>No payment is required for basic rank calculations</li>
                <li>No refunds are applicable for free services</li>
                <li>Free services are provided "as is" without guarantees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Premium Services</h2>
              <p className="text-gray-700 mb-4">
                For any premium services we may offer in the future, the following refund conditions apply:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Eligible for Refund</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Technical issues preventing service delivery within 48 hours</li>
                <li>Service not functioning as described in our documentation</li>
                <li>Duplicate charges or billing errors</li>
                <li>Cancellation within 24 hours of purchase (if service not yet delivered)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Not Eligible for Refund</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Dissatisfaction with calculation results</li>
                <li>Changes in exam results after official publication</li>
                <li>User error in providing incorrect information</li>
                <li>Services already delivered successfully</li>
                <li>Requests made more than 7 days after service delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Process</h2>
              <p className="text-gray-700 mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Contact our support team at support@examranking.com</li>
                <li>Provide your transaction ID and reason for refund request</li>
                <li>Include any relevant documentation or screenshots</li>
                <li>Allow 3-5 business days for review and response</li>
                <li>If approved, refund will be processed within 7-10 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Refund Methods</h2>
              <p className="text-gray-700 mb-4">
                Refunds will be processed using the following methods:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Original payment method (credit card, debit card, etc.)</li>
                <li>Bank transfer for international transactions (if applicable)</li>
                <li>Digital wallet refund for supported payment methods</li>
                <li>Processing fees may be deducted from refund amount</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partial Refunds</h2>
              <p className="text-gray-700 mb-4">
                In certain circumstances, partial refunds may be provided:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Services partially delivered before technical issues</li>
                <li>Subscription services cancelled mid-cycle</li>
                <li>Bulk service packages with some services already used</li>
                <li>Promotional discounts may affect refund calculations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Subscription Services</h2>
              <p className="text-gray-700 mb-4">
                For any subscription-based services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Monthly subscriptions can be cancelled anytime</li>
                <li>No refund for current billing period after services are accessed</li>
                <li>Annual subscriptions may be eligible for prorated refunds</li>
                <li>Cancellation takes effect at the end of current billing period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disputes and Chargebacks</h2>
              <p className="text-gray-700 mb-4">
                Before initiating a chargeback with your bank:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Please contact us first to resolve the issue</li>
                <li>Chargebacks may result in account suspension</li>
                <li>We prefer to resolve disputes directly with customers</li>
                <li>Documentation will be provided for legitimate transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Processing Time</h2>
              <p className="text-gray-700 mb-4">
                Refund processing times:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Review period: 3-5 business days</li>
                <li>Approval notification: Within 24 hours of decision</li>
                <li>Processing time: 7-10 business days after approval</li>
                <li>Bank processing: Additional 2-5 business days (varies by bank)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exceptions</h2>
              <p className="text-gray-700 mb-4">
                This refund policy does not apply to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Services provided by third-party partners</li>
                <li>Gift cards or promotional credits</li>
                <li>Services obtained through unauthorized means</li>
                <li>Accounts suspended for policy violations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to update this refund policy at any time. Changes will be effective immediately 
                upon posting on our website. Continued use of our services constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For refund requests or questions about this policy:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> support@examranking.com<br />
                  <strong>Subject Line:</strong> Refund Request - [Your Transaction ID]<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
              </div>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Currently, most of our services are provided free of charge. 
                    This policy will apply to any premium services we may introduce in the future.
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
