import React from 'react';

import { Button, Checkbox, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BookForm() {
  return (
    <form className="flex flex-col sm:gap-4 gap-2">
      <TextField label="Name" variant="outlined" />
      <TextField label="Phone Number" variant="outlined" />
      <TextField
        type="number"
        label="Number of people participating"
        variant="outlined"
        InputProps={{ inputProps: { min: 2, max: 50 } }}
        defaultValue={2}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker
            label="Basic date time picker"
            defaultValue={AdapterDayjs}
          />
        </DemoContainer>
      </LocalizationProvider>
      <div className="flex items-center py-2">
        <Checkbox defaultChecked />
        <span className=" sm:text-xl">
          I confirm that the above information is correct.
        </span>
      </div>
      <Button className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-[var(--white-color)] sm:text-xl ">
        BOOK
      </Button>
    </form>
  );
}
