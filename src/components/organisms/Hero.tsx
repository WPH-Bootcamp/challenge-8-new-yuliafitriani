import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="px-4 pb-10 pt-56 flex flex-col gap-6">
      {/* <div
        className="
          w-full
          h-55.75 lg:h-[266px]
          px-4
        "
      >
        <img
          src="src/assets/images/hero.png"
          className="min-h-98 w-auto object-cover lg:w-full lg:object-center absolute left-0 top-0 -z-1"
          alt="Hero Movie"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div> */}
      <div className="w-full absolute left-0 top-0 -z-1">
        <img
          src="src/assets/images/hero.png"
          className="h-[345px] lg:h-[810px] lg:max-w-[1536px] w-full object-cover lg:w-full lg:object-cover mx-auto"
          alt="Movie Detail"
        />

        <div className="absolute  inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="flex flex-col items-start p-0 gap-4 rounded-none w-full lg:w-1/2 z-1 pb-8">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-2xl lg:text-5xl font-bold text-left color-neutral-25 z-1">
            The Gorge
          </h1>

          <p className="text-left text-neutral-400 text-sm lg:text-md lg:leading-[30px] z-1">
            Two highly trained operatives grow close from a distance after being
            sent to guard opposite sides of a mysterious gorge. When an evil
            below emerges, they must work together to survive what lies within.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <button
            type="button"
            className="flex flex-row items-center justify-center
            p-2
            gap-2
            h-11
            bg-primary-300
            rounded-full
            flex-none
            order-0
            self-stretch
            text-sm
            font-semibold
            z-2"
          >
            Watch Trailer ▶
          </button>
          <button
            onClick={() => navigate(`/movie/950396`)}
            type="button"
            className="
            p-2
            gap-2h-[44px]
            bg-[rgba(10,13,18,0.6)]
            border border-neutral-900
            backdrop-blur-[20px]
            rounded-full
            flex-none
            order-1
            self-stretch
            box-border
            text-sm
            font-semibold"
          >
            See Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
