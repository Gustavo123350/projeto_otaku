<template>
  <header>
       <div>
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page"></a>
  </li>
  <li class="nav-item">
    <a class="nav-link"><router-link to="/" style="color: darkmagenta;">Home</router-link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link"><router-link to='/redes' style="color: darkmagenta;">Redes</router-link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link"><router-link to="/hello" style="color: darkmagenta;">Hello</router-link></a>
  </li>
</ul>        
    </div>
  </header>
<router-view/>
</template>
