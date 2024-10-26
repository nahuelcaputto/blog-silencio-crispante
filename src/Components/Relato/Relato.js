import "./Relato.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Relato() {
  AOS.init({
    mirror: false,
    once: false,
    easing: "ease-in-out",
    duration: 600,
  });
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="about-title" data-aos="fade-right">
          Relato<strong>.</strong>
        </h1>
        <div
          className="about-text col-sm-12 col-md-12 col-lg-6"
          data-aos="fade-left"
        >
          <h3>INTRODUCCION:</h3>
          <p>
            Los textos que están a punto de leer fueron escritos en pandemia,
            encerrado. Algo pasó ahí, en pandemia, algo grande digo, para bien y
            para mal, yo creo que todavía estamos atravesando, sufriendo, aunque
            finjamos demencia las secuelas de aquella situación insólita, ese
            detenimiento y locura del mundo al principio y estado de alerta
            propuso una suerte de: No queda otra. Fue este un tiempo muy
            creativo e introspectivo, insólito, que en mi provocó ese encierro
            necesario para contarse una historia, escribirla. Yo tenía algo
            acumulado, necesitaba un espacio para hablar de sexualidad, de
            identidad, de la pesadilla de la adultez, de la pesadilla de la
            pubertad, de educación sexual, tenía un cúmulo de algo no hablado y
            sufrido pero como bañado en un brillo magenta. Muy poseso y motivado
            empecé a escribir, a inventar, a recordar y surgió todo lo que
            leerán. No se que es, ES, y yo (con este relato y con todo el
            proceso posterior de la puesta) aprendí a entender y defender esa
            deformación y degeneración que tengo y que tiene lo que hago. En
            pocos meses terminé el texto, fue un viaje veloz, atroz, deforme y
            profundo. Lo terminé con la sensación de que algo faltaba pero
            siempre algo falta, así somos. La verdad es que 30 minutos después
            que decidí cerrar el material salí a andar en bici y me pasó lo que
            cuento en el último texto: “La Crónica del hombre gay” ahí si dije
            “hasta acá” escribí la crónica y la dedicatoria final trémulo,
            crispado y con una angustia liberadora terminé. Punto final. Pasaron
            los años (4) y pasaron muchas cosas con este relato. Cosas muy paja
            que quienes me conocen saben y de las que decidí no hablar acá
            porque después de todo, fue eso de lo que no hablo lo que me ayudó a
            obrar, a resistir y desistir para seguir, para arremeter y retrucar
            para obrar, para emerger. Pero básicamente fueron estos 4 años el
            tiempo que me llevó elaborar la respuesta a la pregunta: ¿Qué hago
            con este texto? ¿Qué atraviesa la obra entera? 4 años de
            investigación para 60 min de obra. Ya vieron la danza, a
            continuación leerán el texto y al final hay unos ensayos y un diario
            bonus track. En fin, no quiero hablar más, quiero dejarlos
            tranquilos con esa distancia que se arma entre el texto y la puesta,
            a ver qué pasa. Realmente no tengo precedentes o referencias en esto
            de proponer leer una cosa después de haber hecho otra cosa antes,
            que surgió de la primera. Pero es este mismo peligro lo que me
            sedujo, que no esté hecho. Esa paradoja abismal, una decisión, una
            búsqueda y una pérdida: Una corazonada, un beat, eso es todo lo que
            tengo, lo que sigo. Defendí y decidí este recorrido escénico y
            literario del que ahora forman parte y creo que esta es la mejor
            manera de culminarlo, después me cuentan. Buen viaje y gracias.
          </p>
        </div>
      </div>
    </div>
  );
}
