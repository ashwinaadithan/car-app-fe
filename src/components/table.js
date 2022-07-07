export default function Table(){

    return (
        <div class="bg-gray-100 py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          
      <div class="flex flex-col">
      <h3 class="text-lg font-medium leading-6 text-gray-900">The tickets raised</h3>
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Car Model
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ticket Number
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Discription
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody x-max="2">
                  
                    <tr class="bg-white" x-description="Odd row">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Engine fault
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Jaguar
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1323
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        dshjvjhfdgdsfhdsfhbssgfggfjrfgrgfrbbre
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  
                    <tr class="bg-gray-50" x-description="Even row">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Bannet dent
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Audi
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        7963
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        dshjvjhfdgdsfhdsfhbssgfggfjrfgrgfrbbre
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  
                    <tr class="bg-white" x-description="Odd row">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Engine fault
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Hundai
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        8264
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        dshjvjhfdgdsfhdsfhbssgfggfjrfgrgfrbbre
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  
                    <tr class="bg-gray-50" x-description="Even row">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Jenny Wilson
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        BMW
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        9346
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        dshjvjhfdgdsfhdsfhbssgfggfjrfgrgfrbbre
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  
                    <tr class="bg-white" x-description="Odd row">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Kristin Watson
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Benz
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        8362
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        dshjvjhfdgdsfhdsfhbssgfggfjrfgrgfrbbre
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  
                    <tr class="bg-gray-50" x-description="Even row">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Engine fault
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Ferrari
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        7352
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        dshjvjhfdgdsfhdsfhbssgfggfjrfgrgfrbbre
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
        </div>
      </div>
    )
  }
  
  