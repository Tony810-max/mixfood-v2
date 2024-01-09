import { Button, TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';
import BookTableModal from '../../../BookTableModal';

export default function FeedBackFooter() {
  const [feedback, setFeedback] = useState(false);

  const hadleFeedBackOpen = () => setFeedback(true);
  const hadleFeedBackClose = () => setFeedback(false);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex-1 flex flex-col items-center ">
      {feedback ? (
        <div className=" w-full flex flex-col items-center gap-4">
          <span className="text-xl font-Roboto-font font-bold">
            Share your feedback with us...!!!
          </span>
          <form className="flex flex-col gap-3 w-full">
            <TextField
              className="w-full"
              label="Full Name"
              variant="outlined"
            />
            <TextField
              className="w-full"
              label="Phone Number"
              variant="outlined"
            />
            <TextArea
              className="w-full"
              placeholder="Please share your feedback with us"
            />
            <div className="flex flex-col gap-3">
              <Button
                variant="outlined"
                className="w-full hover:text-[--primary-color]"
              >
                Send Feedback
              </Button>
              <Button
                variant="outlined"
                className="w-full hover:text-[--primary-color]"
                onClick={hadleFeedBackClose}
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-3 w-full">
          <Button
            variant="outlined"
            className=" hover:text-[--primary-color] w-full text-xl "
            onClick={handleOpen}
          >
            BOOK A TABLE
          </Button>

          <Button
            variant="outlined"
            className=" hover:text-[--primary-color] w-full text-xl "
            onClick={hadleFeedBackOpen}
          >
            Feedback
          </Button>
        </div>
      )}
      <BookTableModal onClose={handleClose} open={open} />
    </div>
  );
}
