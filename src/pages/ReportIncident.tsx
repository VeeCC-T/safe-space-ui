import { ShieldQuestion, Info } from 'lucide-react';
import { toast } from 'sonner';

const InputField = ({ label, id, type = 'text', required = false, helpText }) => (
  <div className="mb-5">
    <label htmlFor={id} className="block text-md font-medium text-pink-900 mb-1">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea id={id} name={id} rows={4} required={required} className="w-full px-4 py-2 text-gray-800 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
    ) : (
      <input type={type} id={id} name={id} required={required} className="w-full px-4 py-2 text-gray-800 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
    )}
    {helpText && <p className="mt-1.5 text-xs text-gray-500 flex items-start"><Info size={14} className="mr-1.5 flex-shrink-0 mt-0.5" /> {helpText}</p>}
  </div>
);

export default function ReportIncident() {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your report has been submitted anonymously. Thank you for your courage.');
    e.target.reset();
  };

  return (
    <div>
       <div className="mb-6 text-center">
          <ShieldQuestion className="mx-auto text-pink-500" size={40}/>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-pink-900">Anonymous Reporting</h2>
          <p className="mt-2 text-md text-gray-600">Your privacy is our priority. Share what happened, safely and anonymously.</p>
      </div>

      <div className="rounded-xl border border-pink-100 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
            <InputField 
                label="Type of Incident" 
                id="incident_type" 
                helpText="e.g., Online harassment, Doxing, Impersonation, Cyberstalking."
            />
            <InputField 
                label="Description" 
                id="description" 
                type="textarea" 
                required 
                helpText="Please describe the incident in as much detail as you feel comfortable with. Do not include personal identifying information."
            />
            <InputField 
                label="Date & Time (Optional)" 
                id="timestamp" 
                type="datetime-local"
                helpText="When did this happen? Providing a time can help establish a pattern."
            />
            <InputField 
                label="Location (Optional)" 
                id="location_free_text" 
                helpText="e.g., Name of the social media platform, website, or app."
            />
            <InputField 
                label="Evidence Links (Optional)" 
                id="evidence_links" 
                helpText="Share links to screenshots or other evidence. Please use an anonymous service like Imgur or a private link."
            />
            
            <div className="mb-4">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="consent_for_followup" name="consent_for_followup" type="checkbox" className="focus:ring-pink-500 h-4 w-4 text-pink-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="consent_for_followup" className="font-medium text-pink-900">Consent for Follow-up</label>
                        <p className="text-gray-500">Check this if you are willing to be contacted by a verified support organization. Your details will remain anonymous to us.</p>
                    </div>
                </div>
            </div>

            <button type="submit" className="w-full mt-4 rounded-lg bg-pink-600 px-6 py-3 text-lg font-bold text-white shadow-md transition-transform hover:bg-pink-700 hover:scale-105 active:scale-95">
                Submit Anonymously
            </button>
        </form>
      </div>
    </div>
  );
}
