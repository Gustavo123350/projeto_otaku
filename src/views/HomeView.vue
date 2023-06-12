<script>
export default{
  data() {
    return {
      currentDateTime: ''
    };
  },
  mounted() {
    this.updateDateTime();
  },
  methods: {
    updateDateTime() {
      setInterval(() => {
        const currentDate = new Date();
        this.currentDateTime = currentDate.toLocaleString();
      }, 1000);
    }
  }
 };

</script>

<template>
  <main>
     <div class="hora">
      {{ currentDateTime }}
     </div> 
  </main>
</template>
