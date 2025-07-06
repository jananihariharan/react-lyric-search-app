import { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../layout/spinner";
import Track from "./track";

const Tracks = () => {
  const { hits, heading } = useContext(Context);

//   console.log("Hits: ", hits);
  return (
    <div>
      {hits && hits.length !== 0 ? (
        <>
          <h3 className="text-center mb-4">{heading}</h3>
          <div className="row">
            {hits.map((item) => {
              const {
                result: { id },
              } = item;
              return <Track key={id} track={item?.result} />;
            })}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Tracks;
