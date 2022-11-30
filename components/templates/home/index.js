import Title from "components/atoms/Title";
import Image from "next/image";

const HomeTemplate = ({ dataStatic }) => {
  return (
    <div className="h-[2000px]">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-6">
              <Title className="text-5xl font-bold">My Story</Title>
              {dataStatic?.Storys?.map((item, index) => {
                return (
                  <div key={index} className="mt-10 last:mt-6">
                    <div
                      className=" mb-5 rounded-2xl px-4 py-5"
                      style={{ boxShadow: "rgb(0 0 0 / 0.25) 0px 4px 10px" }}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeTemplate;
