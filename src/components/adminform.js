export default function Adminform(){

    return (
        <div class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        
  <div class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Ticket
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Fill the form before closing the ticket
          </p>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-4">
          <label for="about" class="block text-sm font-medium text-gray-600">
              Ticket Number
            </label>
            <div class="mt-1 flex rounded-md shadow-sm"> 
              <input type="text" name="username" id="username" autocomplete="username" class="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 p-2" />
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="about" class="block text-sm font-medium text-gray-700">
              About
            </label>
            <div class="mt-1">
              <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Write a discription about the ticket"></textarea>
            </div>
          </div>


          
        </div>
        </div>
      </div>
      </div>

      <div class="pt-5">
      <div class="flex justify-end">
        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
        </button>
        <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </div>

      </div>
      </div></div>

    )
  }
  
  