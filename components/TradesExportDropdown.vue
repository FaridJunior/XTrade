<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        id="menu-button"
        type="button"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggleDropdown"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"></circle>
          <polyline points="94.059 134.059 128 168 161.941 134.059" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline>
          <line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
        </svg>
        <span class="font-semibold ml-2 hidden sm:inline-block"> Export </span>
      </button>
    </div>

    <div v-if="opened" class="origin-top-right absolute right-0 mt-2 whitespace-nowrap rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="p-2" role="none">
        <button id="menu-item-1" type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem" tabindex="-1" @click="_exportCsv">Export as .csv</button>
        <button id="menu-item-2" type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded" role="menuitem" tabindex="-1" @click="_exportXlsx">Export as .xlsx</button>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      opened: false,
    }
  },

  watch: {
    opened(opened) {
      setTimeout(() => {
        if (opened) {
          document.addEventListener('click', this.closeDropdownList)
          document.addEventListener('keydown', this.closeDropdownList)
        } else {
          document.removeEventListener('click', this.closeDropdownList)
          document.removeEventListener('keydown', this.closeDropdownList)
        }
      }, 0)
    },
  },

  methods: {
    toggleDropdown() {
      this.opened = !this.opened
    },

    closeDropdownList(e) {
      if (this.opened && (e.type === 'click' || e.code === 'Escape')) {
        this.opened = false
      }
    },

    _exportXlsx(evt) {
      const ws = XLSX.utils.json_to_sheet(this.data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
      XLSX.writeFile(wb, 'sheetjs.xlsx')
    },

    _exportCsv(evt) {
      const ws = XLSX.utils.json_to_sheet(this.data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
      XLSX.writeFile(wb, 'sheetjs.csv')
    },
  },
}
</script>
