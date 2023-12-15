/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { XCircle } from 'lucide-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BookTableModal({ onClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="absolute"
      >
        <Box sx={style}>
          <XCircle
            className="right-5 top-2 absolute"
            size={28}
            onClick={onClose}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book A Table
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form className="flex flex-col gap-5">
              <TextField id="demo-helper-text-misaligned" label="Full Name" />
              <TextField
                type="number"
                id="demo-helper-text-misaligned-no-helper"
                label="Phone Number"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker label="Basic date time picker" />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                type="number"
                id="demo-helper-text-misaligned-no-helper"
                label="Number of people participating"
              />

              <textarea
                placeholder="Message...!!!"
                className="border-solid border-2"
              ></textarea>
              <FormHelperText className="text-sm">
                Please kindly review the information once again before making a
                reservation.
              </FormHelperText>
              <div className="flex items-center">
                <Checkbox color="success" className="self-start" />
                <span className="text-sm whitespace-nowrap font-bold italic">
                  I confirm that the above information is correct.
                </span>
              </div>
              <Button variant="contained">Book</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
