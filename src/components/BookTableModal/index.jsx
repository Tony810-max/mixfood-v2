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
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

export default function BookTableModal({ onClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="absolute sm:w-full"
      >
        <Box className="w-[340px] md:w-[400px] p-4 md:p-6" sx={style}>
          <XCircle
            className="right-4 md:right-6 top-4 md:top-6 absolute"
            size={32}
            onClick={onClose}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Book A Table
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form className="flex flex-col gap-5">
              <TextField label="Full Name" />
              <TextField label="Phone Number" />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker label="Basic date time picker" />
                </DemoContainer>
              </LocalizationProvider>
              <TextField type="number" label="Number of people participating" />
              <textarea
                placeholder="Message...!!!"
                className="border-solid border-2 p-2"
              />
              <FormHelperText className="text-sm">
                Please kindly review the information once again before making a
                reservation.
              </FormHelperText>
              <div className="flex items-center">
                <Checkbox color="success" defaultChecked />
                <span className="text-sm whitespace-normal font-bold italic">
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
