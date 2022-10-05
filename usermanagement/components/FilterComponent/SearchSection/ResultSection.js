import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "@mui/material/Skeleton";
import React, { useState } from "react";

function ResultSection({ data }) {
  const [loader, setLoader] = useState(true);

  const router = useRouter();

  const handlePush = (id) => {
    router.push(`/search/${id}`);
  };

  return (
    <div className="w-full md:w-3/5 bg-white shadow p-0 sm:p-6 ">
      <h4 className="text-2xl"> {data.length} result found</h4>

      {data && data.length > 0 ? (
        <>
          {data.map((v) => (
            <Card elevation={10} className="flex-col my-3">
              <div className="flex items-center justify-between">
                <div className="w-44 h-52 relative ">
                  {loader && (
                    <Skeleton variant="wave" width={200} height={200} />
                  )}
                  <Image
                    layout="fill"
                    onLoadingComplete={() => setLoader(false)}
                    src={v.imageUrls[0]}
                    className="rounded-lg"
                    alt="categoryImage"
                  />
                </div>
                <div className="mr-auto ml-2 sm:ml-5 w-1/2">
                  <h2 className="text-blue-900 font-bold text-lg">{v.name}</h2>
                  <p className="mt-1 font-bold">{v.city}</p>
                  <h4 className="text-sm max-h-24 truncate lg:whitespace-normal break-all">
                    {v.discription}
                  </h4>
                </div>
                <div className="mt-3 mr-2 sm:mr-6">
                  <h2>Review Score</h2>
                  <p>total Reviews</p>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => handlePush(v._id)}
                  >
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </>
      ) : (
        <div class="max-w-lg mt-4">
          <p class="text-2xl md:text-3xl font-light leading-normal">
            Sorry we couldn't find Any Result.{" "}
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultSection;
