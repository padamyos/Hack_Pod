<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#6A00FF] text-white flex-shrink-0">
        <div class="p-4 text-center font-bold text-xl">
          My Dashboard
        </div>
        <nav>
          <ul>
            <li class="p-4 hover:bg-[#6A00FF]">
              <a href="#" class="block">Dashboard</a>
            </li>
            <li class="p-4 hover:bg-[#6A00FF]">
              <a href="#" class="block">Settings</a>
            </li>
            <li class="p-4 hover:bg-[#6A00FF]">
              <a href="#" class="block">Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
  
      <!-- Main content -->
      <div class="flex-1 p-6">
        <h1 class="text-3xl font-semibold text-gray-700">Dashboard</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-800">Card 1</h2>
            <p class="mt-4 text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
  
          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-800">Card 2</h2>
            <p class="mt-4 text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
  
          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold text-gray-800">Card 3</h2>
            <p class="mt-4 text-gray-600">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dashboard",
  };
  </script>
  
  <style scoped>
  /* Add custom styles if necessary */
  </style>
  