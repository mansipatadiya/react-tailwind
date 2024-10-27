import { fetchReviews } from "@/redux/reviewsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const reviewsDetails = [
  {
    n: "Colby Waisath",
    d: "Principal, Visual Designs Inc.",
    p: "/review.png",
    r: "“Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus tellus eget nulla auctor in gravida nulla sagittis. Nam elementum interdum enim eu cursus felis. In eu nisi non sapien cursus eleifend ut vitae metus. Ut tincidunt pharetra ultricies. Aliquam quis dui nec justo elementum posuere. Nunc viverra a justo lacinia mollis. Etiam volutpat justo metus, aliquam finibus est luctus in. Nam eget ex vitae neque sagittis cursus ac interdum arcu.”",
  },
  {
    n: "Alfredo Gouse",
    d: "Designer, Siegler Homes",
    p: "/review1.png",
    r: "“senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus tellus eget nulla auctor in gravida nulla sagittis. Nam elementum interdum enim eu cursus felis. In eu nisi non sapien cursus eleifend ut vitae metus. Ut tincidunt pharetra ultricies. Aliquam quis dui nec justo elementum posuere. Nunc viverra a justo lacinia mollis. Etiam volutpat justo metus, aliquam finibus est luctus in. Nam eget ex vitae neque sagittis cursus ac interdum arcu.”",
  },
  {
    n: "Whitney Jones",
    d: "Founder, Decorilla Designs",
    p: "/review2.png",
    r: "“tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus tellus eget nulla auctor in gravida nulla sagittis. Nam elementum interdum enim eu cursus felis. In eu nisi non sapien cursus eleifend ut vitae metus. Ut tincidunt pharetra ultricies. Aliquam quis dui nec justo elementum posuere. Nunc viverra a justo lacinia mollis. Etiam volutpat justo metus, aliquam finibus est luctus in. Nam eget ex vitae neque sagittis cursus ac interdum arcu.”",
  },
  {
    n: "Matt Frank",
    d: "Architect, Stage Architects",
    p: "/review3.png",
    r: "“habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus cursus tellus eget nulla auctor in gravida nulla sagittis. Nam elementum interdum enim eu cursus felis. In eu nisi non sapien cursus eleifend ut vitae metus. Ut tincidunt pharetra ultricies. Aliquam quis dui nec justo elementum posuere. Nunc viverra a justo lacinia mollis. Etiam volutpat justo metus, aliquam finibus est luctus in. Nam eget ex vitae neque sagittis cursus ac interdum arcu.”",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  const { reviews, status, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReviews());

    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  return (
    <div className="grid md:grid-cols-3 pt-12 items-center">
      <div className="md:space-y-8 flex md:block overflow-auto gap-8 pb-8 md:pb-0">
        {reviewsDetails.map((a, i) => (
          <div
            key={i}
            className={`cursor-pointer ${active === i ? "text-white" : "text-[#86868B]"
              }`}
            onClick={() => setActive(i)}
          >
            <div className="p-[2px] bg-[linear-gradient(225deg,_#5BB6D6_0%,_#CD428E_50%,_#544C9A_100%)] rounded-full w-[52px] relative">
              <div className="bg-background w-12 h-12 rounded-full "></div>
              <img
                src={a.p}
                className="w-10 h-10 block absolute top-[6px] left-[6px]"
              />
            </div>
            <p className="font-semibold whitespace-nowrap">{a.n}</p>
            <p className="text-sm whitespace-nowrap">{a.d}</p>
          </div>
        ))}
      </div>
      {(status != 'loading') ?
        <div className="col-span-2">
          <p className="text-2xl font-semibold max-w-2xl">
            "{reviews?.reviews?.[active]?.comment}"
          </p>
        </div> : <p>Loading...</p>}
    </div>



  );
}
