var usuarios = [];

/** Asegurasrse de que no exista info en localstorage */
if (localStorage.getItem('usuarios')==null){
    const usuarios = [
        {
            usuario: 'goku',
            password: 'asd.456',
            nombre: 'Son Goku',
            seguidores: ['krillin', 'bulma', 'vegeta'],
            siguiendo: ['dende', 'gohan', 'goten']
        }
    ];

    localStorage.setItem('usuarios',JSON.stringify(usuarios));
}
else{
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

/** Asegurasrse de que no exista tiktoks en localstorage */
if (localStorage.getItem('tiktoks')==null){
    const tiktoks = [
        {
            titulo: "¡Ya basta freezer!",
            fecha: "12/12/2012",
            video: "videos/1.mp4",
            tituloCancion: "Cha la head cha la!",
            likes: 10,
            shares: 15,
            comentarios: [
            { usuario: "krilin", comentario: "Gokuuuuuuuuu!!!!!" },
            { usuario: "vegeta", comentario: "Insecto!!!!!" },
            ],
            hashtags: ["Dogs", "Freezer", "DragonBall"],
           }
    ];

    localStorage.setItem('tiktoks',JSON.stringify(tiktoks));
}
else{
    tiktoks = JSON.parse(localStorage.getItem('tiktoks'));
}


/** Introducir Usuarios */

//Obtenemos los datos de crear usuario
const getDataCreaUsr = () => {
    var nombreCreaUsr  = document.getElementById('inputEmailCreaUsr').value;
    var creaUsr  = document.getElementById('inputEmailCreaUsr').value+Math.floor(Math.random() * (5 - 1));
    var contraseniaCreaUsr  = document.getElementById('inputPasswordCreaUsr').value;
    var contrasenia2CreaUsr  = document.getElementById('inputPassword2CreaUsr').value;
    
    if (nombreCreaUsr != '' && contraseniaCreaUsr===contrasenia2CreaUsr && contraseniaCreaUsr != '' && contrasenia2CreaUsr != '') {
        var nuevoUsr = {
            nombre:nombreCreaUsr,
            password:contraseniaCreaUsr,
            usuario:creaUsr
        }

        usuarios.push(nuevoUsr)
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        alert("Éxito")
    } else {
        alert("Hubo un problema, Llena todos los datos y asegurate que las contaseñas sean iguales");
    }
}

/** Imprimir los usuarios que estan almacenados en localStorage */
    console.log(usuarios);
    var regUsr = document.getElementById('usuariosRegistrados');
    /** Borramos los usuarios anteriores*/
    regUsr.innerHTML = '';
    
    usuarios.forEach(element => {
        return regUsr.innerHTML += 
        `<div id="usuariosRegistrados" class="row">
            <div class="col-2">
            <img  class="user-prof-min rounded-circle" src="profile-pics/goku.jpg" alt="">
        </div>
        <div class="col-5">
            <b>${element.nombre}</b>
            <p>@${element.usuario}</p>
        </div>
        <div class="col-2">
            <button type="button" class="usr-follow btn btn-outline-danger">
                Follow
            </button>
        </div>
        </div>`
    });


/** Imprimir los usuarios que estan almacenados en localStorage */
    console.log(usuarios);
    var regUsr = document.getElementById('usuariosRegistrados');
    /** Borramos los usuarios anteriores*/
    regUsr.innerHTML = '';
    
    usuarios.forEach(element => {
        return regUsr.innerHTML += 
        `<div id="usuariosRegistrados" class="row">
            <div class="col-2">
            <img  class="user-prof-min rounded-circle" src="profile-pics/goku.jpg" alt="">
        </div>
        <div class="col-5">
            <b>${element.nombre}</b>
            <p>@${element.usuario}</p>
        </div>
        <div class="col-2">
            <button type="button" class="usr-follow btn btn-outline-danger">
                Follow
            </button>
        </div>
        </div>`
    });

     /** Introducir tiktoks */

    
var ele = document.getElementById('videosSelect');
ele.innerHTML=''
for (var i = 1; i < 9; i++) {
    // Enviar la data al dropdown
    ele.innerHTML +=
        '<option value="">' + i + '</option>';
}

//Obtenemos los datos de subir los videos
const publicarTikTok = () =>{
    var e  = document.getElementById('videosSelect');
    var videoSelect = e.options[e.selectedIndex].text;
    var titulo  = document.getElementById('agrtiktitulo').value;
    
    if (videoSelect != '' && titulo != '' && videoSelect != 'Seleccionar Videos') {
        var nuevoTiktok = {
            titulo:titulo,
            fecha:hoyFecha(),
            hashtags:[],
            likes:0,
            shares:0,
            comentarios:[],
            video:"videos/" + videoSelect + ".mp4",
            tituloCancion: 'Lo que sea'
        }

        tiktoks.push(nuevoTiktok)
        localStorage.setItem('tiktoks',JSON.stringify(tiktoks));
        alert("Éxito")
    } else {
        alert("Hubo un problema");
    }
}

    const hoyFecha = ()=> {
        var hoy = new Date();
            var dd = hoy.getDate();
            var mm = hoy.getMonth()+1;
            var yyyy = hoy.getFullYear();
            
            dd = addZero(dd);
            mm = addZero(mm);
     
            return dd+'/'+mm+'/'+yyyy;
    }

    function addZero(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }

console.log(tiktoks)
/**Si un usuario no ha hecho login se mostrarán todos los tiktoks*/
/** Imprimir los tiktoks que estan en loca storage para usuario no loggeado */
var tiktoksPost = document.getElementById('cobtainerTiktoks');
/** Borramos los usuarios anteriores*/
tiktoksPost.innerHTML = '';

tiktoks.forEach(element => {
    return tiktoksPost.innerHTML += 
        `<div class="row">
            <div class="col-2">
                <img  class="user-prof rounded-circle" src="profile-pics/goku.jpg" alt="">
            </div>
            <div class="col-7">
                <div class="row">
                    <b>@goku</b>
                    <p class="ml-2">Son Goku</p>
                </div>
                <div class="row">
                    <p class="ml-2">#Dog</p>
                    <p class="ml-2">#Freezer</p>
                    <p class="ml-2">${element.titulo}</p>
                </div>
                <div class="row">
                    <i class="fab fa-itunes-note"></i>
                    <p class="ml-2">Titulo del tema</p>
                </div>
            </div>
            <div class="col-2">
                <button type="button" class="usr-follow btn btn-outline-danger">
                    Follow
                </button>
            </div>
        </div>
        <div style=" text-align: end; " class="row">
            <div class="col-10">
                <video width="320" height="450" controls src=${element.video}>
                </video>
            </div>
            <div class="col-2">

            </div>
        </div>`
});
    
    /**Si un usuario hizo login se mostrarán los tiktoks de los usuarios a los que sigue*/
    //Obtenemos los datos de inicio de sesion

    /**Si el usuario da click a un hashtag de la sección lateral inferior derecha entonces se mostrarán todos los tiktoks
    con dicho hashtag*/
     
    