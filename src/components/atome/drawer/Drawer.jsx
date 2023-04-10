import React from 'react';
import "../css/styles.css";
import SomosF5LogoWhite from '../../../assets/img/SomosF5LogoWhite.png';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  ChartBarIcon,
  DocumentIcon,
  IdentificationIcon,
  FolderIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'

const Drawer = () => {
  const navigation = [
    { name: 'Evento', href: '/', icon: CalendarIcon, current: false },
    { name: 'Tareas', href: 'taks', icon: DocumentIcon, current: false },
    { name: 'Admin', href: 'admin', icon: FolderIcon, current: false },
    { name: 'Empresas', href: 'companies', icon: IdentificationIcon, current: false },
    { name: 'Escuelas', href: 'schools', icon: HomeIcon, current: false },
    { name: 'Estadísticas', href: 'statistics', icon: ChartBarIcon, current: false },
  ];
  // const teams = [
  //   { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  //   { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  //   { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  // ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="h-screen drawer-component flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-orange px-6">
      <div className="flex h-16 shrink-0 items-center">
        <Link to="/">
        <img
          className="h-8 w-auto"
          src={SomosF5LogoWhite}
          alt="Logo de SomosF5"
        />
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="names -mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-white'
                        : 'text-white hover:text-orangel hover:bg-stone5',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-white'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-white' : 'text-white group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                    {item.count ? (
                      <span
                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                        aria-hidden="true"
                      >
                        {item.count}
                      </span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Drawer;