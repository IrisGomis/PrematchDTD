import React from "react";
import DatePicker from "../atome/datepickerAtom/DatePicker";

export default function MolForm() {
  return (
    <div className="bg-stone4 my-10 rounded-lg p-8">
      <form>
        <div className="space-y-8 space-x-8">
          <div className="border-b border-orange pb-6">
            <div className="mt-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre del evento"
                className="block w-full rounded-md border-0 p-1.5 text-stone8 shadow-sm ring-1 ring-inset ring-stone4 placeholder:text-stone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex justify-center  border-b border-orange pb-6">
            <p className="text-start text-stone6 text-sm mr-8 pt-4">Hora</p>
            <DatePicker />
            <p className="text-start text-stone6 text-sm pt-4 my-3 mx-3">
              To
            </p>
            <DatePicker />
          </div>

          <div className="border-b border-orange pb-6">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-stone4 focus-within:ring-2 focus-within:ring-inset focus:ring-orange sm:max-w-md">
                    <span className="flex select-none items-center mr-8 pl-3 text-stone6 sm:text-sm">
                      Orgaizador
                    </span>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-stone8 placeholder:text-stone4 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="  Somos-F5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-orange pb-12">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-start text-stone6 text-sm mr-8 pt-4"
              >
                URL
              </label>
              <div className="mt-2">
                <input
                  id="url"
                  name="url"
                  type="url"
                  className="block w-full rounded-md border-0 py-1.5 text-stone8 shadow-sm ring-1 ring-inset ring-strone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="border-b border-orange pb-12">
            <div className="sm:col-span-3 flex">
              <label
                htmlFor="country"
                className="block text-start text-stone6 text-sm mr-8 pt-4"
              >
                Asistentes
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-stone6 shadow-sm ring-1 ring-inset ring-stone3 focus:ring-2 focus:ring-inset focus:ring-orange sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>NttData</option>
                  <option>FEM-CODERS-NORTE</option>
                  <option>AST</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-b border-orange pb-12">
            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium leading-6 text-stone6"
              >
                Comentarios
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="comment"
                  id="comment"
                  className="block w-full rounded-md border-0 text-stone8 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-stone4 focus:ring-2 focus:ring-inset focus:ring-orange sm:py-1.5 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="rounded-md bg-stone6 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-stone3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-orange py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-orangel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
