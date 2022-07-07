export default function Createticket(){

    return (
        <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      
  <div class="space-y-6">
    <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Create incident ticket</h3>
          <p class="mt-1 text-sm text-gray-500">
            Here you can create a ticket stating your issues with the car and we'll resolve it within given time.
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form class="space-y-6" action="#" method="POST">
          <div class="col-span-6 sm:col-span-4">
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" name="title" id="title" autocomplete="title" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div class="col-span-6 sm:col-span-4">
                <label for="carmodel" class="block text-sm font-medium text-gray-700">Car Model</label>
                <input type="text" name="carmodel" id="carmodel" autocomplete="carmodel" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Explain about the problem you are facing with"></textarea>
              </div>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    )
  }
  
  