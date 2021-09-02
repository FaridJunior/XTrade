<template>
  <aside class="fixed sm:top-0 sm:right-auto sm:bottom-0 sm:left-0 lg:w-80 sm:w-20 sm:h-screen bg-white lg:p-4 p-3 border-r border-t border-gray-200 sm:flex sm:flex-col sm:space-y-14 flex sm:items-stretch items-center w-full h-20 z-20 top-auto bottom-0 left-0 right-0">
    <nuxt-link class="flex items-center sm:mt-8 justify-start text-indigo-900" to="/">
      <SidebarLogo />
      <span class="text-indigo-900 font-thin text-3xl leading-4 transition duration-300 hidden lg:inline capitalize"> <span class="font-bold p-px">X</span>Trade</span>
    </nuxt-link>
    <SidebarUser />
    <SidebarNav>
      <SidebarNavItem title="Dashboard" to="/dashboard">
        <template #icon>
          <SVGDashboard />
        </template>
        Dashboard
      </SidebarNavItem>
      <SidebarNavItem title="Trades" to="/trades">
        <template #icon>
          <SVGTrades />
        </template>
        Trades
      </SidebarNavItem>
      <SidebarNavItem title="Organization" to="/organization">
        <template #icon>
          <SVGOrganization />
        </template>
        Organization
      </SidebarNavItem>
      <SidebarNavItem title="Users" to="/users">
        <template #icon>
          <!-- <SVGUsers /> -->
          <SVGSVGUsers />
        </template>
        Users
      </SidebarNavItem>
      <SidebarNavItem title="Settings" to="/settings">
        <template #icon>
          <SVGSettings />
        </template>
        System settings
      </SidebarNavItem>
      <SidebarNavItem title="logout" to="/logout" class="mt-auto">
        <template #icon>
          <SVGLogout />
        </template>
        Logout
      </SidebarNavItem>
    </SidebarNav>
  </aside>
</template>
<script>
import SVGDashboard from './SVG/SVGDashboard.vue'
import SVGLogout from './SVG/SVGLogout.vue'
import SVGOrganization from './SVG/SVGOrganization.vue'
import SVGSettings from './SVG/SVGSettings.vue'
import SVGTrades from './SVG/SVGTrades.vue'
export default {
  components: { SVGLogout, SVGSettings, SVGDashboard, SVGTrades, SVGOrganization },
}
</script>
