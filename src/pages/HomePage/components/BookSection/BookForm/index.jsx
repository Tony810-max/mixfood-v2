import React from 'react';

import { Checkbox, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BookForm() {
  return (
    <form className="flex flex-col sm:gap-4 gap-2">
      <TextField
        label="Name"
        variant="outlined"
        InputProps={{
          style: { color: 'var(--white-color)' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'var(--white-color)' },
            '&.Mui-focused fieldset': { borderColor: 'var(--primary-color)' },
          },
          '& label.Mui-focused': {
            color: 'var(--white-color)',
            fontSize: '20px',
          },
          '& label': { color: 'var(--white-color)' },
        }}
        className=""
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        InputProps={{
          style: { color: 'var(--white-color)' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'var(--white-color)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--primary-color)',
              paddingTop: '0',
              paddingBottom: '0',
              paddingRight: '18px',
              // paddingLeft: '18px',
            },
          },
          '& label.Mui-focused': {
            color: 'var(--white-color)',
            fontSize: '20px',
            padding: '0 18px',
          },
          '& ::placeholder': { color: 'white' },
          '& label': { color: 'white' },
        }}
      />
      <TextField
        type="number"
        label="Number of people participating"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'var(--white-color)' },
            '&.Mui-focused fieldset': { borderColor: 'var(--primary-color)' },
          },
          '& label.Mui-focused': {
            color: 'var(--white-color)',
            fontSize: '20px',
          },
          '& ::placeholder': { color: 'red' },
          '& label': { color: 'white' },
        }}
        InputProps={{
          inputProps: { min: 1 },
          style: { color: 'var(--white-color)' },
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker
            label="Basic date time picker"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'var(--white-color)' },
                '&.Mui-focused fieldset': {
                  borderColor: 'var(--primary-color)',
                },
              },
              '& label.Mui-focused': {
                color: 'var(--white-color)',
                fontSize: '20px',
              },
              '& ::placeholder': { color: 'red' },
              '& label': { color: 'var(--white-color)' },
              '& .MuiInputBase-input': { color: 'var(--white-color)' },
              '& .MuiSvgIcon-root': { color: 'var(--white-color)' },
            }}
            InputProps={{
              inputProps: { min: 1 },
              style: { color: 'var(--white-color)' },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <div className="flex items-center py-2">
        <Checkbox color="success" sx={{ color: 'white' }} defaultChecked />
        <span className="text-[--white-color] sm:text-xl">
          I confirm that the above information is correct.
        </span>
      </div>
    </form>
  );
}
