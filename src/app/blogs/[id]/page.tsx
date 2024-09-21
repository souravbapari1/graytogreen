import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import Image from "next/image";
import React from "react";

function ReadBlog() {
  return (
    <div>
      <Navbar />
      <div className="w-full md:h-96 h-44 relative overflow-hidden">
        <Image
          src="https://blog.plant-for-the-planet.org/wp-content/uploads/2024/08/image.png"
          width={2000}
          height={700}
          alt=""
          className="w-full md:h-96 h-44 object-cover absolute"
        />
        <div className="w-full  md:h-96 h-44 bg-main/20 backdrop-blur-sm relative"></div>
      </div>
      <div className="container  md:-mt-32 -mt-16 z-20 relative">
        <Image
          src="https://cid-inc.com/app/uploads/2023/04/Plamnt-research.jpg"
          width={2000}
          height={2000}
          alt=""
          className="w-full lg:h-[500px] md:h-96 bg-white h-52 object-cover max-w-[900px] shadow-md rounded-3xl mx-auto"
        />
      </div>
      <div className={`container ${montserrat.className}`}>
        <div className=" max-w-[900px]  mx-auto">
          <h1 className="lg:text-2xl text-xl font-bold mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quaerat culpa maxime laudantium unde debitis error.{" "}
          </h1>
          <p className="font-semibold md:text-base mt-5 text-sm text-gray-400">
            August 22, 2024 - Admin
          </p>
          <br />
          <hr />
          <br />
          <p className="text-justify lg:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias
            earum natus itaque mollitia rerum iste quis et facere vitae
            cupiditate voluptates quae quibusdam saepe totam repudiandae
            exercitationem ipsum, error obcaecati tempore deleniti repellendus
            est non odit. Velit, facilis itaque? Ex ducimus dolores quos
            pariatur nam dolorum et voluptas explicabo magnam praesentium minima
            qui, voluptates excepturi cupiditate ab enim laborum asperiores
            incidunt laboriosam, facere cumque non culpa? Quasi autem iure saepe
            quam doloremque id reiciendis eligendi veritatis tempore libero!
            Pariatur asperiores porro iste, inventore tenetur adipisci, sequi
            officia molestiae distinctio, assumenda ab fugiat maiores
            reprehenderit iure soluta non. Velit sapiente, dignissimos quisquam
            cupiditate dicta iusto animi earum impedit facilis placeat, optio
            doloribus. Rerum commodi porro delectus iure aperiam? Officia quos
            <br />
            <br />
            quo, laboriosam molestias iusto distinctio quis labore veritatis
            sequi dolorem saepe alias doloribus error, eveniet at illum vero
            obcaecati placeat accusantium pariatur ab? Exercitationem fugiat
            aspernatur doloremque dignissimos possimus, aliquam illum! Corporis
            nobis dolores consectetur ipsam cupiditate eveniet, atque eaque
            consequatur aperiam deserunt ab quasi eius, maiores maxime delectus
            doloremque, assumenda dicta incidunt voluptatum aliquid sed
            eligendi? Dignissimos fugiat aut explicabo dolor, quas numquam
            asperiores voluptatum iure ducimus, expedita aperiam obcaecati, ad
            accusantium porro totam possimus! Sequi explicabo cumque culpa
            laborum consequuntur tempore aliquam ratione illum ad quis beatae a
            quidem dolor laudantium nostrum iusto delectus, provident at magni
            deleniti ut debitis! Amet ab reiciendis fuga? Labore tenetur
            obcaecati laboriosam! Voluptas architecto ab fuga, cumque illo ut
            quas inventore repellendus? Enim rem inventore, eaque optio quaerat
            eos iste exercitationem at voluptas, libero obcaecati temporibus
            debitis, ab cupiditate dolor expedita animi aperiam culpa placeat
            quidem cum illo. Assumenda rerum aliquam a totam ducimus recusandae
            sunt nesciunt cum labore quod consectetur veritatis, laboriosam at
            est quisquam obcaecati illum dolor nobis quae ullam voluptatum,
            similique perspiciatis modi voluptatibus. Voluptatibus cumque soluta
            ducimus iste!
          </p>
        </div>
      </div>

      <FooterTop />
      <Footer />
    </div>
  );
}

export default ReadBlog;
