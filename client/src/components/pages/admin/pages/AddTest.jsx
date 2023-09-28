import React from "react";
import AdminNav from "../components/AdminNav";

function AddTest() {
  return (
    <section className="">
      <header className="sticky top-0 z-50">
        <AdminNav />
      </header>
      <div className="h-full w-full py-3">
        {/* make it component */}
        <>
          <h1 className="text-center text-2xl">Class 5th</h1>
          <div className="my-4 flex flex-row items-center justify-center gap-4">
            <button className="rounded-sm border-[.1rem] px-3 py-2 shadow-sm">
              Marathi
            </button>
            <button className="rounded-sm border-[.1rem] px-3 py-2 shadow-sm">
              English
            </button>
            <button className="rounded-sm border-[.1rem] px-3 py-2 shadow-sm">
              G.Ki
            </button>
          </div>
        </>
        <div>
          <>
            <div className="mx-auto w-full px-2 sm:w-[80%] md:w-[70%]">
              {/* make it a component */}
              <div className="flex items-center justify-evenly border border-slate-200/80 bg-slate-100/50 py-4">
                <div>Test-1</div>
                <div>Marathi</div>
                <div className="flex gap-3">
                  <button className="rounded-sm bg-green-300 px-2 py-1">
                    Edit Test
                  </button>
                  <button className="rounded-sm bg-red-300 px-2 py-1">
                    Delete Test
                  </button>
                </div>
              </div>
            </div>
          </>
        </div>
        <div>
          <>
            <form
              action=""
              className="mx-auto mt-10 w-full space-y-4 border  px-2 py-4 sm:w-[80%] md:w-[70%]"
            >
              <h6 className="text-center text-xl"> Add Test Info</h6>
              {/* make it a component */}{" "}
              <>
                <div className="mx-auto flex flex-row flex-wrap justify-center gap-4 border p-4 sm:w-[80%] md:w-[70%] xl:w-[70%]">
                  <input
                    type="text"
                    className="mx-auto border border-slate-100 px-2 py-1 outline-none placeholder:text-center hover:border-slate-300 md:mx-auto"
                    placeholder="Test Title"
                    required
                  />
                  <input
                    type="text"
                    className="mx-auto border border-slate-100 px-2 py-1 outline-none placeholder:text-center hover:border-slate-300 md:mx-auto"
                    placeholder="Test Time"
                    required
                  />
                  <input
                    type="text"
                    className="mx-auto border border-slate-100 px-2 py-1 outline-none placeholder:text-center hover:border-slate-300 md:mx-auto"
                    placeholder="Test Mark"
                    required
                  />
                  <input
                    type="text"
                    className="mx-auto border border-slate-100 px-2 py-1 outline-none placeholder:text-center hover:border-slate-300 md:mx-auto"
                    placeholder="Test Mark Per Question"
                    required
                  />
                </div>
              </>
              <h6 className="text-center text-xl"> Add Test Question</h6>
              <div className="mx-auto flex w-full flex-col sm:w-[80%] md:w-[70%]">
                {/* make it a component */}
                <>
                  <div className="relative grid w-full grid-cols-4 gap-x-2 gap-y-3 border p-4">
                    <button className="absolute right-1 top-1 rounded-full bg-red-500/50 px-2 py-1">
                      X
                    </button>
                    <label htmlFor="">Add Question </label>
                    <input
                      type="text"
                      className=" col-span-4 border border-slate-100 px-2 py-1 outline-none hover:border-slate-300"
                      placeholder="Add Question "
                      required
                    />
                    <label htmlFor="" className=" col-span-4 ">
                      Options{" "}
                    </label>
                    <input
                      type="text"
                      className=" border border-slate-100 px-2 py-1 outline-none hover:border-slate-300"
                      placeholder="0. Option "
                      required
                    />
                    <input
                      type="text"
                      className=" border border-slate-100 px-2 py-1 outline-none hover:border-slate-300"
                      placeholder="1. Option "
                      required
                    />
                    <input
                      type="text"
                      className=" border border-slate-100 px-2 py-1 outline-none hover:border-slate-300"
                      placeholder="2. Option "
                      required
                    />
                    <input
                      type="text"
                      className=" border border-slate-100 px-2 py-1 outline-none hover:border-slate-300"
                      placeholder="3. Option "
                      required
                    />
                    <label htmlFor="" className=" col-span-2 ">
                      Correct Answer
                    </label>
                    <input
                      type="text"
                      className=" col-span-2  border border-slate-100 px-2 py-1 outline-none hover:border-slate-300"
                      placeholder="Answer"
                      required
                    />
                  </div>
                </>
                <div className="my-5 flex  w-full">
                  <button className="mx-auto block border bg-red-50 px-4 py-2">
                    Add More Questions
                  </button>
                  <button
                    type="submit"
                    className="mx-auto block border bg-green-50 px-4 py-2"
                  >
                    Submit ALL Questions
                  </button>
                </div>
              </div>
            </form>
          </>
        </div>
      </div>
    </section>
  );
}

export default AddTest;
