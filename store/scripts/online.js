if (localStorage.getItem("isOnline") === null) {        // verificamos si isonline es null y si lo es le agregamos de valor false
    localStorage.setItem("isOnline", "false");
  }
  
  function renderIcons() {                                  //definimos una función para evaluar el isOnline y renderizar los íconos
    const isOnline = localStorage.getItem("isOnline") === "true";               // guardaos en una variable, isOnline es true
    const iconUsuarioOffline = document.querySelector(".iconUsuarioOffline");           //en variables almacenamos la ubicacion en el document de todos los iconos a renderizar 
    const iconUsuarioOnline = document.querySelector(".iconUsuarioOnline");
    const iconFav = document.querySelector(".iconFav");
    const iconCart = document.querySelector(".iconCart");
  
    if (isOnline) {         //si isOnline es true
      iconUsuarioOffline.classList.add("hidden");               //ocultamos el icono de iniciar session agregando la clase hidden que se activa segun css, la cual se debe agregar en css con display: none para ocultar
      iconUsuarioOnline.classList.remove("hidden");           // lo otros iconos ya tenian esa clase el titulo mas hidden acompañado en HTML, entonces la removemos para que sean visibles si isOnline es true
      iconCart.classList.remove("hidden");
      iconFav.classList.remove("hidden");
    } else {            // si es false
      iconUsuarioOffline.classList.remove("hidden");           //removemos la clase hidden para que el icono de iniciar session sea visible y agregamos para que los otros iconos se oculten
      iconUsuarioOnline.classList.add("hidden");
      iconCart.classList.add("hidden");
      iconFav.classList.add("hidden");
    }
  }
  
  document.querySelector(".iconUsuarioOffline").addEventListener("click", function () {         //al icono offline le agregamos un escuchador de eventos,click con una funcion 
      localStorage.setItem("isOnline", "true");                                                     // cuando se hace click el valor de la clave cambia a true y uego se ejecuta la funcion de renderizado de iconos
      renderIcons();
    });
    
  document.querySelector(".iconUsuarioOnline").addEventListener("click", function () {          //al icono online tambien le agregamos un eveto de click , cada vez que ocurre el valor de la clave en localStorage 
      localStorage.setItem("isOnline", "false");                                                    // cambia a false y luegp se ejecuta la funcion para el renderizado de iconos
      renderIcons();
    });
  
  document.addEventListener("DOMContentLoaded", renderIcons);               //por ultimo  al document cada vez que cargue se le agrega la funcion para renderizar los iconos segun el valor de clave en localStorage