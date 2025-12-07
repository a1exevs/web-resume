import cn from 'classnames';
import React, { KeyboardEvent, MouseEvent, useEffect, useId, useRef, useState } from 'react';

import { clampIndex } from 'src/shared/ui/select/combobox/select-combobox.helpers';
import classes from 'src/shared/ui/select/combobox/select-combobox.module.scss';
import { SelectProps } from 'src/shared/ui/select/select.types';

type Props = SelectProps & {
  ariaLabel?: string;
};

const SelectCombobox: React.FC<Props> = ({ value, onChange, options, className = '', disabled = false, ariaLabel }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(() =>
    clampIndex(
      options.findIndex(option => option.value === value),
      options.length,
    ),
  );

  const rootRef = useRef<HTMLDivElement | null>(null);
  const listboxId = useId();

  const selectedIndex = clampIndex(
    options.findIndex(option => option.value === value),
    options.length,
  );
  const selectedOption = selectedIndex >= 0 && selectedIndex < options.length ? options[selectedIndex] : undefined;

  const computedAriaLabel = ariaLabel ?? selectedOption?.label ?? undefined;

  useEffect(() => {
    setActiveIndex(selectedIndex);
  }, [selectedIndex]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleClickOutside = (event: MouseEvent | globalThis.MouseEvent): void => {
      if (!rootRef.current) {
        return;
      }

      if (event.target instanceof Node && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleToggleOpen = (): void => {
    if (disabled || options.length === 0) {
      return;
    }
    setOpen(prev => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    if (disabled || options.length === 0) {
      return;
    }

    switch (event.key) {
      case 'ArrowDown': {
        event.preventDefault();
        if (!open) {
          setOpen(true);
          setActiveIndex(selectedIndex >= 0 ? selectedIndex : clampIndex(0, options.length));
        } else {
          setActiveIndex(prev => clampIndex((prev ?? -1) + 1, options.length));
        }
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        if (!open) {
          setOpen(true);
          setActiveIndex(selectedIndex >= 0 ? selectedIndex : clampIndex(0, options.length));
        } else {
          setActiveIndex(prev => clampIndex((prev ?? options.length) - 1, options.length));
        }
        break;
      }
      case 'Home': {
        if (!open) {
          return;
        }
        event.preventDefault();
        setActiveIndex(clampIndex(0, options.length));
        break;
      }
      case 'End': {
        if (!open) {
          return;
        }
        event.preventDefault();
        setActiveIndex(clampIndex(options.length - 1, options.length));
        break;
      }
      case 'Enter':
      case ' ': {
        if (!open) {
          event.preventDefault();
          setOpen(true);
          setActiveIndex(selectedIndex >= 0 ? selectedIndex : clampIndex(0, options.length));
        } else if (activeIndex >= 0 && activeIndex < options.length) {
          event.preventDefault();
          const option = options[activeIndex];
          if (option && option.value !== value) {
            onChange(option.value);
          }
          setOpen(false);
        }
        break;
      }
      case 'Escape': {
        if (!open) {
          return;
        }
        event.preventDefault();
        setOpen(false);
        break;
      }
      case 'Tab': {
        if (open) {
          setOpen(false);
        }
        break;
      }
      default:
        break;
    }
  };

  const handleOptionClick = (optionValue: string): void => {
    if (disabled) {
      return;
    }
    if (optionValue !== value) {
      onChange(optionValue);
    }
    setOpen(false);
  };

  const activeOption = activeIndex >= 0 && activeIndex < options.length ? options[activeIndex] : undefined;

  const activeOptionId = activeOption ? `${listboxId}-option-${activeOption.value}` : undefined;

  return (
    <div ref={rootRef} className={classes.SelectCombobox}>
      <button
        type="button"
        className={cn(classes.SelectCombobox__Control, className, {
          [classes.SelectCombobox__Control_open]: open,
        })}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={activeOptionId}
        aria-disabled={disabled || options.length === 0 ? true : undefined}
        aria-label={computedAriaLabel}
        onClick={handleToggleOpen}
        onKeyDown={handleKeyDown}
        disabled={disabled || options.length === 0}
      >
        <span className={classes.SelectCombobox__Value}>{selectedOption?.label ?? ''}</span>
      </button>

      {open && options.length > 0 && (
        <ul id={listboxId} role="listbox" className={classes.SelectCombobox__List}>
          {options.map((option, index) => {
            const optionId = `${listboxId}-option-${option.value}`;
            const isSelected = option.value === value;
            const isActive = index === activeIndex;

            return (
              <li
                key={option.value}
                id={optionId}
                role="option"
                aria-selected={isSelected}
                className={cn(classes.SelectCombobox__Option, {
                  [classes.SelectCombobox__Option_selected]: isSelected,
                  [classes.SelectCombobox__Option_active]: isActive,
                })}
                onMouseDown={event => event.preventDefault()}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectCombobox;
