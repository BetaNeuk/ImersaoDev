var listaFilmes = [
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/36/35/20028803.jpg",
  "http://vortexcultural.com.br/images/2021/05/milagre-na-cela-7.jpg", 
  "https://media.fstatic.com/udLVxGyGWQg81L6Rw6Ctdy-fDno=/290x478/smart/media/movies/covers/2017/04/jx4aeJB.jpg", 
  "https://a-latam.com/wp-content/uploads/2021/10/felicidade_por_um_fio.jpeg"
]

for (var i = 0; i < listaFilmes.length; i++) {
  // document.write("<img src=" + listaFilmes[i] + ">");
  document.querySelector(".content").innerHTML = "<img src=" + listaFilmes[i] + ">";
}