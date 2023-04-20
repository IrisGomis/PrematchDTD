import { getSchedule, deleteSchedule } from "../../../service/ScheduleService";
import { useEffect, useLayoutEffect, useRef, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  {
    id: 1,
    name: "Leslie Abbott",
    stack: "Java",
    lenguages: "Nivel medio",
    time: "10:10",
  },
  {
    id: 2,
    name: "Hector Adams",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "10:20",
  },
  {
    id: 3,
    name: "Blake Alexander",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "10:30",
  },
  {
    id: 4,
    name: "Fabricio Andrews",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "10:40",
  },
  {
    id: 5,
    name: "Angela Beaver",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "10:50",
  },
  {
    id: 6,
    name: "Yvette Blanchard",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "11:00",
  },
  {
    id: 7,
    name: "Lawrence Brooks",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "11:10",
  },
  {
    id: 8,
    name: "Jeffrey Clark",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "11:20",
  },
  {
    id: 9,
    name: "Kathryn Cooper",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "11:30",
  },
  {
    id: 10,
    name: "Alicia Edwards",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "11:40",
  },
  {
    id: 11,
    name: "Benjamin Emerson",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "11:50",
  },
  {
    id: 12,
    name: "Jillian Erics",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "12:00",
  },
  {
    id: 13,
    name: "Chelsea Evans",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "12:10",
  },
  {
    id: 14,
    name: "Michael Gillard",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "12:20",
  },
  {
    id: 15,
    name: "Dries Giuessepe",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "12:30",
  },
  {
    id: 16,
    name: "Jenny Harrison",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "12:40",
  },
  {
    id: 17,
    name: "Lindsay Hatley",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "12:50",
  },
  {
    id: 18,
    name: "Anna Hill",
    stack: "Java - PHP",
    lenguages: "Nivel Alto",
    time: "13:00",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MolDateMatches() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selected, setSelected] = useState(people[3]);
  const [selectedSchedule, setSelectedSchedule] = useState([]);
  const [schedule, setSchedule] = useState([]);

  // useEffect(() => {
  //   getSchedule()
  //     .then((response) => {
  //       setSchedule(response.schedulerRecruiters.data);
  //       setSelectedSchedule(response.schedulerRecruiters.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

  useEffect(() => {
    getSchedule()
      .then((response) => {
        const schedule = response.data.map((schedule) => ({
          nameEvent: schedule.nameEvent,
          nameCompany: schedule.nameCompany,
          nameRecruiter: schedule.nameCompany,
          nameCoder: schedule.nameCoder,
          afinity: schedule.afinity,
          interview: schedule.interview,
        }));
        setSchedule(schedule);
      })
      .catch((error) => console.error(error));
  }, []);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedSchedule.length > 0 && selectedSchedule.length < schedule.length;
    setChecked(selectedSchedule.length === schedule.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedSchedule, schedule]);

  function toggleAll() {
    if (selectedSchedule.length === 0) {
      return;
    }
    setSelectedSchedule(checked || indeterminate ? [] : selectedSchedule);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  function handleDelete() {
    if (selectedSchedule.length === 0) {
      console.warn("No Schedules selected to delete");
      return;
    }

    // Create an array of promises to delete each selected Schedule
    const deletePromises = selectedSchedule.map((schedule) =>
      deleteSchedule(schedule.id)
    );

    // Delete all Schedules in parallel
    Promise.all(deletePromises)
      .then((responses) => {
        console.log("Schedules deleted successfully!");
        // Remove all deleted Schedules from the Schedule state
        const deletedIds = selectedSchedule.map((schedule) => schedule.id);
        setSchedule(schedule.filter((e) => !deletedIds.includes(e.id)));
        // Clear the selectedSchedule state
        setSelectedSchedule([]);
        setChecked(false);
        setIndeterminate(false);
      })
      .catch((error) => {
        console.error(`Error deleting schedules: ${error.message}`);
      });
  }
  return (
    <>
      <div className="bg-stone6 w-full  rounded-xl p-20 m-20 text-white">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl text-orange font-semibold leading-7">
              Agenda match
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              className="text-sm text-stone2 my-10 mx-10 px-6 py-1.5 rounded-xl bg-gradient-to-r from-orangel to-orange hover:from-verde hover:to-verdel ..."
              type="button"
            >
              <a href="/">Crear Agenda</a>
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="relative">
                {selectedSchedule.length > 0 && (
                  <div className="block left-14 top-0 h-12 items-center space-x-3 sm:left-12">
                    <button
                      type="button"
                      className="inline-flex items-center rounded px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                      onClick={() => handleDelete(selectedSchedule[0].id)}
                    >
                      Eliminar
                    </button>
                  </div>
                )}
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-stone3 text-orange focus:ring-orange"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                      </th>
                      <th
                        scope="col"
                        className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-white"
                      >
                        Evento
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Compañia
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Recruiter
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Coder
                      </th>
                      {/* <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Afinidad
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                      >
                        Entrevistas
                      </th> */}
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                      >
                        <span className="sr-only">Editar</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange ">
                    {schedule.map((e) => (
                      <tr key={e.id} className="hover:bg-gray-50">
                        <td className="px-7 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            name={e.id}
                            className="h-4 w-4 text-indigo-600 focus:ring-orange"
                            checked={selectedSchedule.some(
                              (ev) => ev.id === e.id
                            )}
                            onChange={(schedule) => {
                              const isChecked = schedule.target.checked;
                              setSelectedSchedule((prevState) => {
                                if (isChecked) {
                                  return [...prevState, e];
                                } else {
                                  return prevState.filter(
                                    (ev) => ev.id !== e.id
                                  );
                                }
                              });
                            }}
                          />
                        </td>
                        <td
                          className={classNames(
                            "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                            selectedSchedule.includes(e.id)
                              ? "text-orange"
                              : "text-stone6"
                          )}
                        >
                          {e.nameEvent}
                        </td>
                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.nameEvent}</td> */}
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                          {e.nameCompany}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
                          {e.nameCompany}
                        </td>
                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.nameCoder}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.afinity}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.interview}
                        </td> */}
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-stone6 w-auto">
                          <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                              <>
                                <div className="relative mt-2 w-full">
                                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-stone6 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-stone6 focus:outline-none focus:ring-2 focus:ring-orange sm:text-sm sm:leading-6">
                                    <span className="block truncate w-9">
                                      {selected.nameCoder}
                                    </span>
                                    <span className="pointer-Schedules-none absolute inset-y-0 right-0 flex items-center pr-2 w-full">
                                      <ChevronUpDownIcon
                                        className="h-5 w-5 text-stone6"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  </Listbox.Button>

                                  <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-96 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                      {schedule.map((person) => (
                                        <Listbox.Option
                                          key={person.id}
                                          className={({ active }) =>
                                            classNames(
                                              active
                                                ? "bg-orange text-stone3"
                                                : "text-stone6",
                                              "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                          }
                                          value={person}
                                        >
                                          {({ selected, active }) => (
                                            <>
                                              <span
                                                className={classNames(
                                                  selected
                                                    ? "font-semibold"
                                                    : "font-normal",
                                                  "block truncate"
                                                )}
                                              >
                                                <thead className="w-96">
                                                <tr>
                                                  <th>Coder</th>
                                                  <th>Afinidad</th>
                                                  <th>Entrevista</th>
                                                </tr>
                                                </thead>
                                                <tbody className="w-96">
                                                <td>{person.nameCoder}</td> 
                                                <td>{person.afinity}</td>
                                                <td>{person.interview}</td> 
                                                </tbody>
                                              </span>

                                              {selected ? (
                                                <span
                                                  className={classNames(
                                                    active
                                                      ? "text-stone6"
                                                      : "text-orange",
                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                                  )}
                                                >
                                                  <CheckIcon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                  />
                                                </span>
                                              ) : null}
                                            </>
                                          )}
                                        </Listbox.Option>
                                      ))}
                                    </Listbox.Options>
                                  </Transition>
                                </div>
                              </>
                            )}
                          </Listbox>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            to={`/Scheduleedit/${e.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Editar
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
