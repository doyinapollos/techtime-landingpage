/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import roundIcon from '../assets/svgs/round-icon.svg';
import roundIconFill from '../assets/svgs/round-fill-icon.svg';
import ropeArrow from '../assets/svgs/rope-arrow-icon.svg';
import arrowOutward from '../assets/svgs/arrow_outward.svg';
import profilePic from '../assets/images/image-1.jpg';
import bulb from '../assets/svgs/bulb.svg';
import figmaLogo from '../assets/svgs/figma-logo.svg';
import heroImage from '../assets/svgs/hero-image.svg';
import vscodeLogo from '../assets/svgs/vscode-logo.svg';
import triangleIcon from '../assets/svgs/triangle-icon.svg';
import wordpressLogo from '../assets/svgs/wordPress-logo.svg';
import zoomLogo from '../assets/svgs/zoom-logo.svg';
import stripeLogo from '../assets/svgs/stripe-logo.svg';
import mondayLogo from '../assets/svgs/monday-logo.svg';
import slackLogo from '../assets/svgs/slack-logo.svg';
import dropboxLogo from '../assets/svgs/dropbox-logo.svg';
import crownIcon from '../assets/svgs/crown-icon.svg';
import volumeUp from '../assets/svgs/volume_up.svg';
import laptopMan from '../assets/svgs/laptop-man.svg';
import laptopLady from '../assets/svgs/laptop-lady.svg';
import inputAntenna from '../assets/svgs/input-antenna.svg';
import autoplay from '../assets/svgs/autoplay.svg';
import description from '../assets/svgs/description.svg';
import zigZagShape from '../assets/svgs/zig-zag-shape.svg';
import laptopBoy from '../assets/svgs/laptop-boy.svg';
import castForEducation from '../assets/svgs/cast-for-education.svg';
import scheduleIcon from '../assets/svgs/schedule-icon.svg';
import groupOfPeopleIcon from '../assets/svgs/group-of-people-icon.svg';
import localAtm from '../assets/svgs/local-atm.svg';
import starIcon from '../assets/svgs/star-icon.svg';
import star from '../assets/svgs/star.svg';
import menuBook from '../assets/svgs/menu-book.svg';
import scheduleIcon1 from '../assets/svgs/schedule-icon1.svg';
import courseImage1 from '../assets/svgs/course-image1.svg';
import dot1 from '../assets/svgs/dot1.svg';
import dot2 from '../assets/svgs/dot2.svg';

function LandingPage() {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center ">
      <nav className="w-full h-[100px] bg-[#004DB3] flex justify-between items-center text-white ">
        <div className="w-[15%] h-full flex justify-center items-center  ">
          <p className="ml-[]  text-[30px] cursor-pointer font-amazingKids font-[400] ">
            TechTime{' '}
          </p>{' '}
        </div>{' '}
        <div className="w-[50%] h-full flex justify-around items-center ">
          <ul className="w-[60%] h-full flex justify-between items-center ">
            <li className="text-[16px]  font-[700] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 ">
              Home{' '}
            </li>{' '}
            <li className="text-[16px] font-[700] text-[#AAC4E6] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 ">
              About Us{' '}
            </li>{' '}
            <li className="text-[16px] font-[700] text-[#AAC4E6] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 ">
              Courses{' '}
            </li>{' '}
            <li className="text-[16px] font-clashDisplay font-[700] text-[#AAC4E6] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 ">
              Testimonial{' '}
            </li>{' '}
            <li className="text-[16px] font-clashDisplay font-[700] text-[#AAC4E6] cursor-pointer transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110 ">
              Community{' '}
            </li>{' '}
          </ul>{' '}
          <a
            href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <button
              className=" w-[145px] h-[54px] rounded-[5px] text-[#004DB3] bg-white flex justify-center items-center text-[16px] font-[700] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
              type="button"
            >
              Enroll now{' '}
              <img
                className="w-[15px] h-[15px] ml-[10px] animate-bounce "
                src=""
                alt=""
              />{' '}
            </button>{' '}
          </a>{' '}
        </div>{' '}
      </nav>{' '}
      <div className="w-[100%] h-[700px] bg-[#004DB3] flex justify-center items-center  ">
        <div className="w-[50%] h-[100%] flex flex-col justify-start items-center ">
          <div className="w-[85%] h-[20%] flex justify-between items-center ">
            <img
              className="w-[16px] h-[16px] text-[#00C040] "
              src={roundIcon}
              alt=""
            />
            <img
              className="w-[9px] h-[9px] mt-[15px] relative right-[170px] "
              src={roundIconFill}
              alt=""
            />
          </div>
          <div className="w-[100%] h-[80%] pl-[25px] flex flex-col justify-start items-start ">
            <div className="w-[100%] h-[45%] text-[54px] font-clashDisplay font-[700] text-white ">
              <p>
                Grow your skills to <br />
                advance your career
                <br />
                path
              </p>
            </div>
            <div className="w-[100%] h-[15%] text-[13px] font-[500] text-[#E7E7E7] flex justify-start items-center ">
              <p>
                Build Your Future With Our Quality Education. The Best And
                Largest All <br /> -In-One Online Tutoring Platform In The World
              </p>
            </div>
            <div className="w-[100%] h-[40%] text-[16px] font-[500] text-[#E7E7E7] flex justify-between items-start ">
              <div className="w-[80%] h-[70%] flex flex-col justify-around items-start ">
                <div className="flex justify-center items-center ">
                  <a
                    href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {' '}
                    <button
                      className=" w-[216px] h-[54px] rounded-[4px] text-white border flex justify-center items-center text-[16px] font-[700] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
                      type="button"
                    >
                      Get started now{' '}
                      <img
                        className="w-[11px] h-[11px] ml-[10px] animate-bounce "
                        src={arrowOutward}
                        alt=""
                      />{' '}
                    </button>{' '}
                  </a>{' '}
                  <a
                    href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {' '}
                    <button
                      className=" w-[145px] h-[54px] rounded-[4px] text-[#004DB3] ml-[15px] bg-white flex justify-center items-center text-[16px] font-[700] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
                      type="button"
                    >
                      Enroll now{' '}
                      <img
                        className="w-[15px] h-[15px] ml-[10px] animate-bounce "
                        src=""
                        alt=""
                      />{' '}
                    </button>{' '}
                  </a>{' '}
                </div>
                <div className="flex justify-center items-center  ">
                  <div className="flex ">
                    <div className="w-[64px] h-[64px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[64px] h-[64px] ml-[-20px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[64px] h-[64px] ml-[-20px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[64px] h-[64px] ml-[-20px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[64px] h-[64px] ml-[-20px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center ml-[15px] font-clashDisplay font-[700] ">
                    <span>
                      255k+ <br /> previews
                    </span>
                  </div>
                </div>
              </div>

              <img
                className="w-[20%] h-[80%] relative bottom-[40px] "
                src={ropeArrow}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center ">
          <div className="w-[] h-[90%] flex flex-col justify-between items-center ">
            <div className="relative left-[120px] top-[40px] flex flex-col justify-center items-center ">
              <img className="w-[204px] h-[187px] " src={bulb} alt="" />
              <img
                className="w-[25px] h-[25px] relative bottom-[30px] "
                src={roundIcon}
                alt=""
              />
            </div>
            <img
              className="w-[93px] h-[93px] bg-white relative top-[45px] right-[20px] rounded-[4px] "
              src={figmaLogo}
              alt=""
            />
            <img className="w-[9px] h-[9px]" src={roundIconFill} alt="" />
          </div>
          <img className="w-[450px] h-[700px] " src={heroImage} alt="" />
          <div className="w-[15%] h-[80%] flex flex-col justify-between items-center ">
            <img
              className="[93px] h-[93p] relative top-[70px] right-[100px] "
              src={vscodeLogo}
              alt=""
            />
            <img
              className="w-[35px] h-[35px] relative right-[80px] bottom-[50px] "
              src={triangleIcon}
              alt=""
            />
            <img
              className="w-[84px] h-[84px] relative right-[70px] bg-white rounded-[4px] "
              src={wordpressLogo}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100px] flex justify-center items-center bg-[#CCDBF0] ">
        <div className="w-[70%] h-full flex justify-between items-center ">
          <img className="w-[129px] h-[25px] " src={zoomLogo} alt="" />
          <img className="w-[129px] h-[44px]" src={stripeLogo} alt="" />
          <img className="w-[159px] h-[45px]" src={mondayLogo} alt="" />
          <img className="w-[126px] h-[35px]" src={slackLogo} alt="" />
          <img className="w-[159px] h-[45px]" src={dropboxLogo} alt="" />
        </div>
      </div>
      <div className="w-[100%] h-[650px] bg-[#F8F9FC] flex justify-center items-center ">
        <div className="w-[48%] h-[100%] mt-[30px] flex flex-col justify-center items-start ">
          <div className="flex justify-start items-center ml-[-45px] ">
            <img
              className="w-[45px] h-[65px] relative bottom-[60px] left-[15px] "
              src={crownIcon}
              alt=""
            />
            <p className="font-clashDisplay font-[700] text-[#000F24] text-[43px] ">
              High quality video, audio <br /> & live classes
            </p>
          </div>
          <p className="font-[500] text-[#A1A1A1] text-[13px] my-[15px] ">
            High-defination video is video of higher resolution and quality than
            standard <br /> definition. while there’s no standard meaning for
            high definition, generally any <br /> standard video image
          </p>
          <div className="my-[20px] flex ">
            <a
              href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              <button
                className=" w-[70px] h-[54px] rounded-l-[4px] text-white bg-[#004DB3] flex justify-center items-center text-[16px] font-[700] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
                type="button"
              >
                View{' '}
                <img
                  className="w-[11px] h-[11px] ml-[10px] animate-bounce "
                  src=""
                  alt=""
                />{' '}
              </button>{' '}
            </a>{' '}
            <a
              href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              <button
                className=" relative right-[10px] bottom-[3px] w-[90px] h-[54px] rounded-r-[4px] text-white bg-[#004DB3] flex justify-center items-center text-[16px] font-[700] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
                type="button"
              >
                Courses{' '}
                <img
                  className="w-[15px] h-[15px] ml-[10px] animate-bounce "
                  src=""
                  alt=""
                />{' '}
              </button>{' '}
            </a>{' '}
          </div>
          <div className="flex mt-[20px]">
            <div className="bg-white w-[200px] h-[72px] rounded-[4px] mr-[20px] flex justify-center items-center ">
              <div className="w-[32px] h-[32px] bg-[#3FA96A33] mr-[15px] flex justify-center items-center ">
                <img className="w-[16px] h-[16px] " src={volumeUp} alt="" />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] ">
                Audio Classes
              </p>
            </div>
            <div className="bg-white w-[190px] h-[72px] rounded-[4px] flex justify-center items-center ">
              <div className="w-[32px] h-[32px] bg-[#F79E8E33] mr-[15px] flex justify-center items-center ">
                <img className="w-[16px] h-[16px] " src={inputAntenna} alt="" />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] ">
                Live classes
              </p>
            </div>
          </div>
          <div className="flex my-[20px]">
            <div className="bg-white w-[221px] h-[72px] rounded-[4px] mr-[20px] flex justify-center items-center ">
              <div className="w-[32px] h-[32px] bg-[#9269CD33] mr-[15px] flex justify-center items-center ">
                <img className="w-[16px] h-[16px] " src={autoplay} alt="" />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] ">
                Recorded classes
              </p>
            </div>
            <div className="bg-white w-[190px] h-[72px] rounded-[4px] flex justify-center items-center ">
              <div className="w-[32px] h-[32px] bg-[#5978CF33] mr-[15px] flex justify-center items-center ">
                <img className="w-[16px] h-[16px] " src={description} alt="" />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] ">
                50+ notes
              </p>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-[100%] flex justify-start items-center ">
          <div className="w-[50%] h-[65%] relative top-[110px] right-[120px] flex flex-col justify-between items-center z-10 ">
            <div className="w-[190px] h-[81px] mr-[40px] bg-white rounded-[8px] flex flex-col justify-center items-center ">
              <p className="text-[12px] ">255k+ enrolled students</p>
              <div className="flex ">
                <div className="w-[44px] h-[44px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
                <div className="w-[44px] h-[44px] ml-[-20px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
                <div className="w-[44px] h-[44px] ml-[-20px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
                <div className="w-[44px] h-[44px] ml-[-20px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
                <div className="w-[44px] h-[44px] ml-[-20px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <img className="w-[350px] h-[250px] " src={laptopLady} alt="" />
          </div>
          <div className="absolute  ">
            <img className=" w-[500px] h-[500px]  " src={laptopMan} alt="" />
          </div>
        </div>
      </div>
      <section className="w-[100%] h-[60px] flex justify-center items-center ">
        <div className="w-[60%] h-full flex justify-end items-center ">
          <img className="w-[75px] h-[20px] " src={zigZagShape} alt="" />
        </div>
      </section>
      <section className="w-[100%] h-[650px] flex justify-center items-center ">
        <div className="w-[45%] h-[100%] flex flex-col justify-start items-start ">
          <p className="font-[700] text-[45px] text-[#000F24] font-clashDisplay ">
            This is why we are best <br /> from others
          </p>
          <p className="text-[#A1A1A1] font-[500] text-[14px] my-[20px] ">
            High-defination video is video of higher resolution and quality than
            standard <br /> definition. while there’s no standard meaning for
            high definition, generally any <br /> standard video image
          </p>
          <div className="mt-[15px] ">
            <img className="w-[500px] " src={laptopBoy} alt="" />
          </div>
        </div>
        <div className="w-[45%] h-[100%] flex flex-col justify-center items-center ">
          <div className="flex my-[10px]">
            <div className="bg-white w-[300px] h-[270px] px-[15px] rounded-[4px] mr-[20px] flex flex-col justify-center items-start ">
              <div className="w-[48px] h-[48px] bg-[#4C7FBD] mr-[15px] flex justify-center items-center ">
                <img
                  className="w-[20px] h-[16px] "
                  src={castForEducation}
                  alt=""
                />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] py-[10px] ">
                Experienced Mentors
              </p>
              <p className="text-[12px] ">
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </div>
            <div className="bg-white w-[300px] h-[270px] px-[15px] rounded-[4px] flex flex-col justify-center items-start ">
              <div className="w-[48px] h-[48px] bg-[#AECD5E] mr-[15px] flex justify-center items-center ">
                <img className="w-[20px] h-[20px] " src={scheduleIcon} alt="" />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] py-[10px] ">
                One-On-One Meetings
              </p>
              <p className="text-[12px] ">
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </div>
          </div>
          <div className="flex my-[10px]">
            <div className="bg-white w-[300px] h-[270px] px-[15px] rounded-[4px] mr-[20px] flex flex-col justify-center items-start ">
              <div className="w-[48px] h-[48px] bg-[#ED6BA6] mr-[15px] flex justify-center items-center ">
                <img
                  className="w-[24px] h-[12px] "
                  src={groupOfPeopleIcon}
                  alt=""
                />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] py-[10px] ">
                Group Meetings
              </p>
              <p className="text-[12px] ">
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </div>
            <div className="bg-white w-[300px] h-[270px] px-[15px] rounded-[4px] flex flex-col justify-center items-start ">
              <div className="w-[48px] h-[48px] bg-[#EA6B45] mr-[15px] flex justify-center items-center ">
                <img className="w-[20px] h-[16px] " src={localAtm} alt="" />{' '}
              </div>
              <p className="text-[16px] text-[#000F24] font-[700] py-[10px] ">
                Affordable Prices
              </p>
              <p className="text-[12px] ">
                High-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[300px] flex flex-col justify-start items-center ">
        <p className="text-[55px] text-[#000F24] font-[700] font-clashDisplay ">
          Browse our popular courses
        </p>
        <p className="text-[16px] text-[#A1A1A1] font-[500] ">
          High-defination video is video of higher resolution and quality than
          standard definition. while <br /> there’s no standard meaning for high
          definition, generally any standard video image
        </p>
        <div className="w-[80%] h-[60px] flex justify-start items-center ">
          <img className="W-[50px] h-[51px] " src={starIcon} alt="" />
        </div>
        <div className="w-[50%] h-[55px] text-[16px] font-[700] flex justify-around items-center ">
          <button
            className="w-[137px] h-[46px] rounded-[4px] bg-white flex justify-center items-center "
            type="button"
          >
            All categories
          </button>
          <button
            className="w-[137px] h-[46px] flex justify-center items-center "
            type="button"
          >
            Design
          </button>
          <button
            className="w-[137px] h-[46px] flex justify-center items-center "
            type="button"
          >
            Development
          </button>
          <button
            className="w-[137px] h-[46px] flex justify-center items-center "
            type="button"
          >
            Marketing
          </button>
        </div>
      </section>
      <section className="w-[100%] h-auto bg-red-400 flex flex-col justify-center items-center ">
        <div className="w-[90%] h-auto flex justify-center items-center flex-wrap ">
          <div className="w-[360px] h-[430px] p-[5px] rounded-[16px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage1} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[12px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[79px] h-[24px] rounded-[16px] bg-[#3FA96A33] text-[#1E5DCE] text-[12px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[16px] h-[16px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[20px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to user research in <br /> ux design
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[12px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[22px] h-[16px] " src={menuBook} alt="" />
                  <p className="text-[12px] ml-[7px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[16px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[20px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[430px] p-[5px] rounded-[16px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage1} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[12px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[79px] h-[24px] rounded-[16px] bg-[#3FA96A33] text-[#1E5DCE] text-[12px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[16px] h-[16px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[20px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to user research in <br /> ux design
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[12px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[22px] h-[16px] " src={menuBook} alt="" />
                  <p className="text-[12px] ml-[7px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[16px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[20px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[430px] p-[5px] rounded-[16px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage1} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[12px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[79px] h-[24px] rounded-[16px] bg-[#3FA96A33] text-[#1E5DCE] text-[12px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[16px] h-[16px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[20px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to user research in <br /> ux design
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[12px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[22px] h-[16px] " src={menuBook} alt="" />
                  <p className="text-[12px] ml-[7px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[16px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[20px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[430px] p-[5px] rounded-[16px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage1} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[12px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[79px] h-[24px] rounded-[16px] bg-[#3FA96A33] text-[#1E5DCE] text-[12px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[16px] h-[16px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[20px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to user research in <br /> ux design
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[12px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[22px] h-[16px] " src={menuBook} alt="" />
                  <p className="text-[12px] ml-[7px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[16px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[20px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[430px] p-[5px] rounded-[16px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage1} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[12px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[79px] h-[24px] rounded-[16px] bg-[#3FA96A33] text-[#1E5DCE] text-[12px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[16px] h-[16px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[20px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to user research in <br /> ux design
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[12px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[22px] h-[16px] " src={menuBook} alt="" />
                  <p className="text-[12px] ml-[7px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[16px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[20px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[360px] h-[430px] p-[5px] rounded-[16px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage1} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[12px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[79px] h-[24px] rounded-[16px] bg-[#3FA96A33] text-[#1E5DCE] text-[12px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[16px] h-[16px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[20px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to user research in <br /> ux design
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[12px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[22px] h-[16px] " src={menuBook} alt="" />
                  <p className="text-[12px] ml-[7px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[40px] h-[40px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[16px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[20px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[100px] flex justify-center items-center ">
          <button
            className="w-[209px] h-[54px] rounded-[4px] FONT-[700] bg-[#004DB3] text-white text-[16px] flex justify-center items-center "
            type="button"
          >
            Explore all courses
          </button>
        </div>
      </section>
      <section className="w-[100%] h-[200px] flex flex-col justify-start items-center ">
        <p className="text-[55px] text-[#000F24] font-[700] font-clashDisplay ">
          What our clients are saying
        </p>
        <p className="text-[16px] text-[#A1A1A1] font-[500] ">
          High-defination video is video of higher resolution and quality than
          standard definition. while <br /> there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </section>
      <section className="w-[100%] h-[300px] bg-red-600 flex flex-col overflow-scroll justify-center items-start ">
        <div className="w-[100%] h-[300px] bg-red-600 flex overflow justify-center items-start ">
          <div className="w-[500px] h-[230px] px-[20px] m-[12px] rounded-[24px] bg-white flex flex-col justify-center items-start  ">
            <p className="text-[14px] font-[500] text-[#A1A1A1] ">
              High-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition. hbuild your
              future with our quality education. the best and largest all-in-one
              online tutoring platform in the world.
            </p>
            <div className="flex justify-center items-center mt-[15px]  ">
              <div className="flex ">
                <div className="w-[48px] h-[48px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
              <div className="  flex flex-col justify-center items-start ml-[15px] font-clashDisplay   ">
                <p className="text-black font-[700] text-[14px] ">
                  Ebi Apollos
                </p>
                <p className="text-[#A1A1A1] font-[400] text-[12px] ">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[230px] px-[20px] m-[12px] rounded-[24px] bg-white flex flex-col justify-center items-start  ">
            <p className="text-[14px] font-[500] text-[#A1A1A1] ">
              High-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition. hbuild your
              future with our quality education. the best and largest all-in-one
              online tutoring platform in the world.
            </p>
            <div className="flex justify-center items-center mt-[15px]  ">
              <div className="flex ">
                <div className="w-[48px] h-[48px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
              <div className="  flex flex-col justify-center items-start ml-[15px] font-clashDisplay   ">
                <p className="text-black font-[700] text-[14px] ">
                  Ebi Apollos
                </p>
                <p className="text-[#A1A1A1] font-[400] text-[12px] ">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
          <div className="w-[500px] h-[230px] px-[20px] m-[15px] rounded-[24px] bg-white flex flex-col justify-center items-start  ">
            <p className="text-[14px] font-[500] text-[#A1A1A1] ">
              High-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition. hbuild your
              future with our quality education. the best and largest all-in-one
              online tutoring platform in the world.
            </p>
            <div className="flex justify-center items-center mt-[15px]  ">
              <div className="flex ">
                <div className="w-[48px] h-[48px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
              <div className="  flex flex-col justify-center items-start ml-[15px] font-clashDisplay   ">
                <p className="text-black font-[700] text-[14px] ">
                  Ebi Apollos
                </p>
                <p className="text-[#A1A1A1] font-[400] text-[12px] ">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[50px] flex justify-center items-center ">
          <img className="w-[10px] h-[10px] m-[2px] " src={dot1} alt="" />
          <img className="w-[10px] h-[10px] m-[2px] " src={dot2} alt="" />
          <img className="w-[10px] h-[10px] m-[2px] " src={dot1} alt="" />
          <img className="w-[10px] h-[10px] m-[2px] " src={dot1} alt="" />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
