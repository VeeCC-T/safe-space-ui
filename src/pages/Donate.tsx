import { Heart, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

const amounts = [10, 25, 50, 100];

export default function Donate() {

    const handleDonation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const amount = formData.get('amount');
        toast.success(`Thank you for your generous donation of $${amount}! Your support helps us keep women safe online.`);
        e.target.reset();
    }

  return (
    <div>
        <div className='mb-6 text-center'>
            <Heart className='mx-auto text-pink-500' size={40}/>
            <h2 className='mt-2 text-3xl font-bold tracking-tight text-pink-900'>Support Our Mission</h2>
            <p className='mt-2 text-md text-gray-600'>Your anonymous donation helps us provide these resources for free.</p>
        </div>

      <div className='rounded-xl border border-pink-100 bg-white p-6 shadow-sm'>
        <form onSubmit={handleDonation}>
          <div className='mb-5'>
            <label className='block text-md font-medium text-pink-900 mb-2'>Choose an amount (USD)</label>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
              {amounts.map(amount => (
                <button key={amount} type='button' onClick={(e) => { e.target.form.amount.value = amount }} className='rounded-lg border-2 border-pink-200 p-4 text-center font-bold text-pink-800 hover:bg-pink-100 hover:border-pink-400 focus:bg-pink-100 focus:border-pink-500'>
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="amount" className="block text-md font-medium text-pink-900 mb-1">Or enter a custom amount</label>
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                    type="number" 
                    id="amount" 
                    name="amount" 
                    min="1"
                    required
                    placeholder='5.00'
                    className="w-full pl-10 pr-4 py-2 text-gray-800 bg-white border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" 
                />
            </div>
          </div>

          <button type="submit" className="w-full mt-4 rounded-lg bg-pink-600 px-6 py-3 text-lg font-bold text-white shadow-md transition-transform hover:bg-pink-700 hover:scale-105 active:scale-95">
            Donate Securely
          </button>
           <p className='mt-3 text-xs text-center text-gray-500'>Donations are processed securely and are anonymous.</p>
        </form>
      </div>
    </div>
  );
}
