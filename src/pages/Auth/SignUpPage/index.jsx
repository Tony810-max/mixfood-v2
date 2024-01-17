import {
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
} from '@mui/material';
import { EyeOff } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="">
      <div className="fixed z-0 flex flex-col right-10 top-10">
        <span className="text-[#333] text-right font-poppins-font text-base font-normal leading-normal p-[0.125rem]">
          {`Already have an ccount? `}
          <Link
            to={'/'}
            className="text-[#111]  font-poppins-font text-base font-normal leading-normal underline hover:opacity-70"
          >
            {` Log in `}
          </Link>
        </span>
        <span className="text-[#666] font-poppins-font text-base font-normal leading-normal p-[0.125rem] ">
          Forget your user ID or password?
        </span>
      </div>
      <div className="relative flex flex-col items-center top-16 gap-10">
        <span className=" rounded-full w-16 h-16 bg-[#C4C4C4]" />
        <FormControl>
          <div>
            <span>Create an account</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              lobortis maximus
            </span>
          </div>
          <FormGroup>
            <FormLabel>Email</FormLabel>
            <Input
              className="border border-solid border-black mt-0"
              disableUnderline
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Phone</FormLabel>
            <Input
              className="border border-solid border-black mt-0"
              disableUnderline
            />
            <FormHelperText>
              We strongly recommend adding a phone number. This will help verify
              your account and keep it safe.
            </FormHelperText>
          </FormGroup>
          <FormGroup>
            <div>
              <FormLabel>Password</FormLabel>
              <div>
                <EyeOff />
                <span>Hide</span>
              </div>
            </div>
            <Input
              className="border border-solid border-black mt-0"
              disableUnderline
            />
            <div>
              <div>
                <div>
                  <div className=" rounded-full w-2 h-2 bg-[#666666]" />
                  <span>Use a number (e.g. 1234)</span>
                </div>
              </div>
            </div>
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default SignUpPage;
