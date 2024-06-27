import { useState, useEffect, useRef } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import Panel from './panel';

function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleToggleDropdown = () => {
    // setIsOpen((currenToggleState) => !currenToggleState);
    setIsOpen(!isOpen);
  };

  //   const dropd = document.querySelector('.w-48');

  //   const handleDrop = (event) => {
  //     if (dropd.contains(event.target)) {
  //       console.log('inside');
  //     } else {
  //       console.log('outside');
  //     }
  //   };
  //   document.addEventListener('click', handleDrop, true);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => document.removeEventListener('click', handler);
  }, []);

  const handleOptionClick = (option) => {
    //CLOSE DROPDOWN
    setIsOpen(!isOpen);
    //WHAT OPTION DID THE USER CLICK ON
    onChange(option);
  };

  let icon = isOpen ? (
    <GoChevronDown className="text-lg" />
  ) : (
    <GoChevronRight className="text-lg" />
  );

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="cursor-pointer rounded p-1 hover:bg-sky-100"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="relative w-full">
      <Panel
        className="flex cursor-pointer items-center justify-between"
        onClick={handleToggleDropdown}
      >
        {value?.label || 'SELECT'}
        {icon}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full z-[9]">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;

// import { useState } from 'react';
// import { GoChevronDown, GoChevronRight } from 'react-icons/go';

// function Dropdown({ options, onSelect }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('SELECT');

//   const handleToggleDropdown = () => {
//     setIsOpen((currenToggleState) => !currenToggleState);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option.label);
//     onSelect(option);
//     setIsOpen(!isOpen);
//   };

//   const icon = (
//     <span className="text-2xl">
//       {isOpen ? <GoChevronDown /> : <GoChevronRight />}
//     </span>
//   );

//   //let labelValue = isOpen ? 'SELECT' : selectedOption;
//   const renderedOptions = options.map((option) => {
//     return (
//       <div
//         className="flex cursor-pointer items-center justify-between border-b bg-gray-50 p-3"
//         onClick={() => handleOptionClick(option)}
//         key={option.value}
//       >
//         {option.label}
//       </div>
//     );
//   });

//   return (
//     <div className="rounded border-x border-t">
//       <label onClick={handleToggleDropdown}>
//         {selectedOption}
//         {icon}
//       </label>
//       {isOpen && <div>{renderedOptions}</div>}
//     </div>
//   );
// }

// export default Dropdown;
