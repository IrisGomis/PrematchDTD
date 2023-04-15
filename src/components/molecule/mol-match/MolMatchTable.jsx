import { getMatch} from "../../../service/MatchesService";
import { useEffect, useState } from "react";
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

 
  export default function MolMatchTable() {

    const [match, setMatch] = useState([]);

    useEffect(() => {
        getMatch()
          .then((response) => {
            const matches = response.data.map((match) => ({
              nameEvent: match.nameEvent,
              nameCompany: match.nameCompany,
              nameRecruiter: match.nameRecruiter,
              nameCoder: match.nameCoder,
              afinity: match.afinity,
            }));
            setMatch(matches);
          })
          .catch((error) => console.error(error));
      }, []);
    
      return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Listado del Match</h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear Match
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Match
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Code ID
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Recruiter ID 
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Afinidad
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      Número de Match
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {match.map((e, eIdx) => (
                    <tr key={e.id}>
                      <td
                        className={classNames(
                          eIdx !== e.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                        )}
                      >
                        {e.nameEvent}
                      </td>
                      <td
                        className={classNames(
                          eIdx !== e.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                        )}
                      >
                        {e.nameCompany}
                      </td>
                      <td
                        className={classNames(
                          eIdx !== e.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                        )}
                      >
                        {e.nameRecruiter}
                      </td>
                      <td
                        className={classNames(
                          eIdx !== e.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                      >
                        {e.nameCoder}
                      </td>
                      <td
                        className={classNames(
                          eIdx !== e.length - 1 ? 'border-b border-gray-200' : '',
                          'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                        )}
                      >
                        {e.afinity}
                      </td>

                      {/* <td
                        className={classNames(
                          personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                          'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                        )}
                      >
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  