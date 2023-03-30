/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from 'react';
import WorldMap from './WorldMap';
import hamburgerMenuIcon from '../assets/svgs/hamburger-menu-icon.svg';
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
import inputAntenna from '../assets/svgs/input-antenna.svg';
import autoplay from '../assets/svgs/autoplay.svg';
import description from '../assets/svgs/description.svg';
import laptopMan from '../assets/svgs/laptop-man.svg';
import laptopLady from '../assets/svgs/laptop-lady.svg';
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
import courseImage2 from '../assets/svgs/course-image2.svg';
import courseImage3 from '../assets/svgs/course-image3.svg';
import courseImage4 from '../assets/svgs/course-image4.svg';
import courseImage5 from '../assets/svgs/course-image5.svg';
import courseImage6 from '../assets/svgs/course-image6.svg';
import dot1 from '../assets/svgs/dot1.svg';
import dot2 from '../assets/svgs/dot2.svg';
import facebookLogo from '../assets/svgs/facebook-logo.svg';
import twitterLogo from '../assets/svgs/twitter-logo.svg';
import youtubeLogo from '../assets/svgs/youtube-logo.svg';
import instagramLogo from '../assets/svgs/instagram-logo.svg';
import eyeglassShape from '../assets/svgs/eye-glass-shape.svg';

function Mobile() {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center ">
      <nav className="w-full h-[100px] px-[12px] bg-[#004DB3] flex justify-between items-center text-white ">
        <div className="w-[15%] h-full flex justify-center items-center  ">
          <p className="ml-[]  text-[19px] cursor-pointer font-amazingKids font-[400] ">
            TechTime{' '}
          </p>{' '}
        </div>{' '}
        <div className="w-[10%] h-full flex justify-around items-center ">
          <div>
            <img
              className="w-[24px] h-[24px] "
              src={hamburgerMenuIcon}
              alt=""
            />
          </div>
        </div>{' '}
      </nav>{' '}
      <section className="w-[100%] h-auto bg-[#004DB3] flex flex-col justify-center items-center  ">
        <div className="w-[90%] h-[380px] flex flex-col justify-start items-center ">
          <div className="w-[100%] h-[100%] flex flex-col justify-start items-center ">
            <div className="w-[100%] h-[40%] text-[30px] font-clashDisplay font-[700] text-white flex flex-col justify-center items-center ">
              <p>
                Grow your skills to <br />
                advance your career
              </p>
              <span className="text-[30px] font-clashDisplay font-[700] ">
                {' '}
                path
              </span>
            </div>
            <div className="w-[100%] h-[10%] text-[8px] font-[500] text-[#E7E7E7] flex justify-center items-center ">
              <p>
                Build Your Future With Our Quality Education. The Best And
                Largest All <br /> -In-One Online Tutoring Platform In The World
              </p>
            </div>
            <div className="w-[90%] h-[15%] flex justify-center items-center ">
              <a
                href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                <button
                  className=" w-[100px] h-[28px] rounded-[4px] text-white border flex justify-center items-center text-[8px] font-[700] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
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
                  className=" w-[73px] h-[27px] rounded-[4px] text-[#004DB3] ml-[7px] bg-white flex justify-center items-center text-[8px] font-[700] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
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
            <div className="w-[100%] h-[25%] text-[16px] font-[500] text-[#E7E7E7] flex justify-center items-center ">
              <div className="w-[70%] h-[100%] flex flex-col justify-center items-end ">
                <div className="flex justify-center items-center  ">
                  <div className="flex ">
                    <div className="w-[35px] h-[35px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[35px] h-[35px] ml-[-15px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[35px] h-[35px] ml-[-15px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[35px] h-[35px] ml-[-15px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                    <div className="w-[35px] h-[35px] ml-[-15px] ">
                      <img
                        className="w-full h-full rounded-[50px] "
                        src={profilePic}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center text-[13px] ml-[10px] font-clashDisplay font-[700] ">
                    <span>
                      255k+ <br /> previews
                    </span>
                  </div>
                </div>
              </div>

              <img className="w-[30%] h-[80%] " src={ropeArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[510px] flex justify-center items-start ">
          <div className="w-[] h-[100%] flex flex-col justify-between items-center z-10 relative right-[120px] ">
            <div className=" flex flex-col justify-center items-center relative top-[50px] left-[7px] ">
              <img className="w-[100px] h-[90px] " src={bulb} alt="" />
              <img className="w-[16px] h-[16px] " src={roundIcon} alt="" />
            </div>
            <img
              className="w-[63px] h-[63px] bg-white rounded-[4px] relative top-[40px] left-[5px] "
              src={figmaLogo}
              alt=""
            />
            <img className="w-[9px] h-[9px]" src={roundIconFill} alt="" />
          </div>
          <img className="absolute " src={heroImage} alt="" />
          <div className="w-[] h-[95%] flex flex-col justify-between items-center z-10 relative left-[90px] ">
            <img
              className="[53px] h-[53px] relative top-[40px] "
              src={vscodeLogo}
              alt=""
            />
            <img
              className="w-[35px] h-[35px] relative bottom-[40px] "
              src={triangleIcon}
              alt=""
            />
            <img
              className="w-[54px] h-[54px] bg-white rounded-[4px] relative top-[20px] right-[7px] "
              src={wordpressLogo}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[50px] flex justify-center items-center bg-[#CCDBF0] ">
        <div className="w-[70%] h-full flex justify-between items-center ">
          <img className="w-[38px] h-[8px] " src={zoomLogo} alt="" />
          <img className="w-[38px] h-[16px]" src={stripeLogo} alt="" />
          <img className="w-[59px] h-[10px]" src={mondayLogo} alt="" />
          <img className="w-[56px] h-[10px]" src={slackLogo} alt="" />
          <img className="w-[59px] h-[10px]" src={dropboxLogo} alt="" />
        </div>
      </section>
      <section className="w-[100%] h-[300px] flex flex-col justify-center items-start ">
        <div className="w-[100%] flex justify-center items-center ">
          <img
            className="w-[24px] h-[36px] relative bottom-[33px] right-[-5px] "
            src={crownIcon}
            alt=""
          />
          <p className=" font-clashDisplay font-[700] text-[#000F24] text-[20px] ">
            High quality video, audio & live
            <br /> <span className="ml-[100px] "> classes</span>
          </p>
        </div>
        <p className="font-[500] text-[#A1A1A1] text-[8px] w-[100%] flex justify-center items-center ">
          High-defination video is video of higher resolution and quality than
          standard <br /> definition. while there’s no standard meaning for high
          definition, generally any <br /> standard video image
        </p>
        <div className="my-[20px] flex justify-center items-center w-[100%]  ">
          <a
            href="https://docs.google.com/document/d/1UGQbyNr1VdTNWt4-pvKNwZuQ7oVnVQkZ/edit?usp=share_link&ouid=109017585835242468987&rtpof=true&sd=true"
            rel="noreferrer"
            target="_blank"
          >
            {' '}
            <button
              className="flex justify-center items-center w-[83px] h-[27px] rounded-[4px] text-white bg-[#004DB3] text-[8px] transition duration-500 ease-in-out hover:bg-[#00ADB5] transform hover:-translate-y-1 hover:scale-110"
              type="button"
            >
              View Courses{' '}
              <img
                className="w-[11px] h-[11px] ml-[10px] animate-bounce "
                src=""
                alt=""
              />{' '}
            </button>{' '}
          </a>{' '}
        </div>
        <div className="flex justify-center items-center w-[100%] ">
          <div className="bg-white w-[125px] h-[33px] rounded-[4px] mr-[10px] flex justify-center items-center ">
            <div className="w-[32px] h-[32px] bg-[#3FA96A33] mr-[15px] flex justify-center items-center ">
              <img className="w-[9px] h-[9px] " src={volumeUp} alt="" />{' '}
            </div>
            <p className="text-[8px] text-[#000F24] font-[700] ">
              Audio Classes
            </p>
          </div>
          <div className="bg-white w-[123px] h-[33px] rounded-[4px] flex justify-center items-center ">
            <div className="w-[32px] h-[32px] bg-[#F79E8E33] mr-[15px] flex justify-center items-center ">
              <img className="w-[10px] h-[10px] " src={inputAntenna} alt="" />{' '}
            </div>
            <p className="text-[8px] text-[#000F24] font-[700] ">
              Live classes
            </p>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center my-[10px]">
          <div className="bg-white w-[146px] h-[33px] rounded-[4px] mr-[10px] flex justify-center items-center ">
            <div className="w-[32px] h-[32px] bg-[#9269CD33] mr-[15px] flex justify-center items-center ">
              <img className="w-[8px] h-[8px] " src={autoplay} alt="" />{' '}
            </div>
            <p className="text-[8px] text-[#000F24] font-[700] ">
              Recorded classes
            </p>
          </div>
          <div className="bg-white w-[117px] h-[33px] rounded-[4px] flex justify-center items-center ">
            <div className="w-[32px] h-[32px] bg-[#5978CF33] mr-[15px] flex justify-center items-center ">
              <img className="w-[5px] h-[7px] " src={description} alt="" />{' '}
            </div>
            <p className="text-[8px] text-[#000F24] font-[700] ">50+ notes</p>
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[300px] flex justify-center items-start ">
        <div className="w-[50%] h-[90%] relative flex flex-col justify-between items-center z-10 ">
          <div className="w-[90px] h-[30px] relative top-[60px] right-[130px] bg-white rounded-[8px] flex flex-col justify-center items-center ">
            <p className="text-[7px] ">255k+ enrolled students</p>
            <div className="flex ">
              <div className="w-[16px] h-[16px] ">
                <img
                  className="w-full h-full rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>
              <div className="w-[16px] h-[16px] ml-[-7px] ">
                <img
                  className="w-full h-full rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>
              <div className="w-[16px] h-[16px] ml-[-7px] ">
                <img
                  className="w-full h-full rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>
              <div className="w-[16px] h-[16px] ml-[-7px] ">
                <img
                  className="w-full h-full rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>
              <div className="w-[16px] h-[16px] ml-[-7px] ">
                <img
                  className="w-full h-full rounded-[50px] "
                  src={profilePic}
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            className="w-[160px] h-[100px] relative right-[85px] "
            src={laptopLady}
            alt=""
          />
        </div>
        <div className="absolute  ">
          <img className=" w-[250px] h-[210px]  " src={laptopMan} alt="" />
        </div>
      </section>
      <section className="w-[100%] h-[370px] flex flex-col justify-center items-center ">
        <p className="font-[700] text-[20px] text-[#000F24] font-clashDisplay ">
          This is why we are best from <br />
          <span className="ml-[80px] "> others</span>
        </p>
        <p className=" text-[#A1A1A1] font-[500] text-[8px] my-[10px] justify-center items-start ">
          High-defination video is video of higher resolution and quality than
          standard <br /> definition. while there’s no standard meaning for high
          definition, generally any <br />
          <span className="ml-[100px]">standard video image</span>
        </p>
        <div className="mt-[5px] ">
          <img className="w-[350px] " src={laptopBoy} alt="" />
        </div>
      </section>
      <section className="w-[100%] flex justify-center items-center my-[10px]">
        <div className="bg-white w-[150px] h-[120px] px-[7px] rounded-[4px] mr-[10px] flex flex-col justify-center items-start ">
          <div className="w-[30px] h-[30px] bg-[#4C7FBD] mr-[7px] flex justify-center items-center ">
            <img className="w-[13px] h-[10px] " src={castForEducation} alt="" />{' '}
          </div>
          <p className="text-[8px] text-[#000F24] font-[700] py-[10px] ">
            Experienced Mentors
          </p>
          <p className="text-[8px] ">
            High-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.
          </p>
        </div>
        <div className="bg-white w-[150px] h-[120px] px-[7px] rounded-[4px] flex flex-col justify-center items-start ">
          <div className="w-[28px] h-[28px] bg-[#AECD5E] mr-[7px] flex justify-center items-center ">
            <img className="w-[10px] h-[10px] " src={scheduleIcon} alt="" />{' '}
          </div>
          <p className="text-[8px] text-[#000F24] font-[700] py-[10px] ">
            One-On-One Meetings
          </p>
          <p className="text-[8px] ">
            High-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.
          </p>
        </div>
      </section>
      <section className="w-[100%] flex justify-center items-center my-[10px]">
        <div className="bg-white w-[150px] h-[120px] px-[7px] rounded-[4px] mr-[10px] flex flex-col justify-center items-start ">
          <div className="w-[28px] h-[28px] bg-[#ED6BA6] mr-[7px] flex justify-center items-center ">
            <img className="w-[13px] h-[8px] " src={groupOfPeopleIcon} alt="" />{' '}
          </div>
          <p className="text-[8px] text-[#000F24] font-[700] py-[10px] ">
            Group Meetings
          </p>
          <p className="text-[8px] ">
            High-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.
          </p>
        </div>
        <div className="bg-white w-[150px] h-[120px] px-[7px] rounded-[4px] flex flex-col justify-center items-start ">
          <div className="w-[30px] h-[30px] bg-[#EA6B45] mr-[7px] flex justify-center items-center ">
            <img className="w-[10px] h-[8px] " src={localAtm} alt="" />{' '}
          </div>
          <p className="text-[8px] text-[#000F24] font-[700] py-[10px] ">
            Affordable Prices
          </p>
          <p className="text-[8px] ">
            High-defination video is video of higher resolution and quality than
            standard definition. high-defination video is video of higher
            resolution and quality than standard definition.
          </p>
        </div>
      </section>
      <section className="w-[100%] h-[200px] flex flex-col justify-center items-center ">
        <div className="w-[90%] flex justify-start items-center ">
          <img className="W-[20px] h-[21px] " src={starIcon} alt="" />
        </div>
        <p className="text-[24px] text-[#000F24] font-[700] font-clashDisplay ">
          Browse our popular courses
        </p>
        <p className="text-[8px] text-[#A1A1A1] font-[500] ">
          High-defination video is video of higher resolution and quality than
          standard <br /> definition. while there’s no standard meaning for high
          definition, generally any <br />{' '}
          <span className="ml-[80px] "> standard video image</span>
        </p>

        <div className="w-[50%] h-[50px] text-[8px] font-[700] flex justify-around items-center ">
          <button
            className="w-[70px] h-[19px] text-[#004DB3] rounded-[4px] bg-white flex justify-center items-center "
            type="button"
          >
            All categories
          </button>
          <button
            className="w-[70px] h-[19px] flex justify-center items-center "
            type="button"
          >
            Design
          </button>
          <button
            className="w-[70px] h-[19px] flex justify-center items-center "
            type="button"
          >
            Development
          </button>
          <button
            className="w-[70px] h-[19px] flex justify-center items-center "
            type="button"
          >
            Marketing
          </button>
        </div>
      </section>
      <section className="w-[100%] h-auto flex flex-col justify-center items-center ">
        <div className="w-[95%] h-auto flex justify-center items-center flex-wrap ">
          <div className="w-[170px] h-[230px] p-[5px] rounded-[8px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage1} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[8px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[30px] h-[10px] rounded-[8px] bg-[#3FA96A33] text-[#1E5DCE] text-[8px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[10px] h-[10px] mx-[5px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[8px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to user research in <br /> ux design
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[10px] h-[10px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[8px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[12px] h-[8px] " src={menuBook} alt="" />
                  <p className="text-[8px] ml-[5px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[8px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[12px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[170px] h-[230px] p-[5px] rounded-[8px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage3} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[8px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[30px] h-[10px] rounded-[8px] bg-[#3FA96A33] text-[#1E5DCE] text-[8px] flex justify-center items-center "
                  type="button"
                >
                  Marketing
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[10px] h-[10px] mx-[5px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[12px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to new marketing <br /> audience
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[10px] h-[10px] mr-[5px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[8px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[12px] h-[10px] " src={menuBook} alt="" />
                  <p className="text-[8px] ml-[5px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] rounded-[50px] mr-[7px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[8px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[12px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[170px] h-[230px] p-[5px] rounded-[8px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage2} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[8px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[30px] h-[10px] rounded-[8px] bg-[#3FA96A33] text-[#1E5DCE] text-[8px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[10px] h-[10px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[8px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to html, css <br /> & bootstrap
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[10px] h-[10px] mr-[7px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[8px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[12px] h-[8px] " src={menuBook} alt="" />
                  <p className="text-[8px] ml-[5px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] rounded-[50px] mr-[5px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[10px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[12px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[170px] h-[230px] p-[5px] rounded-[8px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage4} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[8px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[30px] h-[10px] rounded-[8px] bg-[#3FA96A33] text-[#1E5DCE] text-[8px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[10px] h-[10px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[8px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  introduction to javascript, git & <br /> GitHub
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[10px] h-[10px] mr-[5px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[8px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[12px] h-[8px] " src={menuBook} alt="" />
                  <p className="text-[8px] ml-[5px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] rounded-[50px] mr-[5px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[10px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[12px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[170px] h-[230px] p-[5px] rounded-[8px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage5} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[8px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[30px] h-[10px] rounded-[8px] bg-[#3FA96A33] text-[#1E5DCE] text-[8px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[10px] h-[10px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[8px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  Introduction to outroom <br /> marketing analysis
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[10px] h-[10px] mr-[5px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[8px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[12px] h-[8px] " src={menuBook} alt="" />
                  <p className="text-[8px] ml-[5px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] rounded-[50px] mr-[5px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[10px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[12px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[170px] h-[230px] p-[5px] rounded-[8px] flex justify-center items-center ">
            <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center ">
              <div className="w-[100%] h-[50%] ">
                <img className="w-[100%] h-[100%] " src={courseImage6} alt="" />
              </div>
              <div className="w-[90%] h-[10%] text-[8px] text-[#A1A1A1] flex justify-between items-center ">
                <button
                  className="w-[79px] h-[24px] rounded-[16px] bg-[#3FA96A33] text-[#1E5DCE] text-[8px] flex justify-center items-center "
                  type="button"
                >
                  Design
                </button>
                <div className=" flex justify-center items-center ">
                  <p>4.7k</p>
                  <img
                    className="w-[10px] h-[10px] mx-[7px] "
                    src={star}
                    alt=""
                  />
                  <p>(32.7k+)</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] text-[8px] font-[700] font-clashDisplay text-[#000F24] ">
                <p>
                  introduction to live marketing <br /> analysis
                </p>
              </div>
              <div className="w-[90%] h-[10%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[10px] h-[10px] mr-[5px] "
                    src={scheduleIcon1}
                    alt=""
                  />
                  <p className="text-[8px] ">23hrs 50mins</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="w-[12px] h-[8px] " src={menuBook} alt="" />
                  <p className="text-[8px] ml-[5px] ">15 lessons</p>
                </div>
              </div>
              <div className="w-[90%] h-[15%] flex justify-between items-center ">
                <div className="flex justify-center items-center ">
                  <img
                    className="w-[20px] h-[20px] rounded-[50px] mr-[5px] "
                    src={profilePic}
                    alt=""
                  />
                  <p className="text-black text-[10px] font-[700] ">
                    Ebi Apollos
                  </p>
                </div>
                <p className="text-[#004DB3] text-[12px] font-[600] font-clashDisplay ">
                  $15.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[50px] flex justify-center items-center ">
          <button
            className="w-[83px] h-[27px] rounded-[4px] font-[700] bg-[#004DB3] text-white text-[8px] flex justify-center items-center "
            type="button"
          >
            Explore all courses
          </button>
        </div>
      </section>
      <section className="w-[100%] h-[150px] flex flex-col justify-center items-center ">
        <p className="text-[24px] text-[#000F24] font-[700] font-clashDisplay ">
          What our clients are saying
        </p>
        <p className="text-[8px] my-[7px] text-[#A1A1A1] font-[500] ">
          High-defination video is video of higher resolution and quality than
          standard
          <br /> definition. while there’s no standard meaning for high
          definition, generally any
          <br />
          <span className="ml-[80px] "> standard video image</span>
        </p>
      </section>
      <section className="w-[100%] h-[250px] flex flex-col justify-center items-start ">
        <div className="w-[100%] h-[250px] flex justify-center items-start ">
          <div className="w-[300px] h-[200px] px-[7px] m-[8px] rounded-[24px] bg-white flex flex-col justify-center items-start  ">
            <p className="text-[8px] font-[500] text-[#A1A1A1] ">
              High-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition. hbuild your
              future with our quality education. the best and largest all-in-one
              online tutoring platform in the world.
            </p>
            <div className="flex justify-center items-center mt-[15px]  ">
              <div className="flex ">
                <div className="w-[18px] h-[18px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
              <div className="  flex flex-col justify-center items-start ml-[7px] font-clashDisplay   ">
                <p className="text-black font-[700] text-[8px] ">Ebi Apollos</p>
                <p className="text-[#A1A1A1] font-[400] text-[10px] ">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[200px] px-[7px] m-[8px] rounded-[24px] bg-white flex flex-col justify-center items-start  ">
            <p className="text-[8px] font-[500] text-[#A1A1A1] ">
              High-defination video is video of higher resolution and quality
              than standard definition. high-defination video is video of higher
              resolution and quality than standard definition. hbuild your
              future with our quality education. the best and largest all-in-one
              online tutoring platform in the world.
            </p>
            <div className="flex justify-center items-center mt-[7px]  ">
              <div className="flex ">
                <div className="w-[20px] h-[20px] ">
                  <img
                    className="w-full h-full rounded-[50px] "
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
              <div className="  flex flex-col justify-center items-start ml-[15px] font-clashDisplay   ">
                <p className="text-black font-[700] text-[8px] ">Ebi Apollos</p>
                <p className="text-[#A1A1A1] font-[400] text-[12px] ">
                  Frontend Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[20px] flex justify-center items-center ">
          <img className="w-[10px] h-[10px] m-[2px] " src={dot1} alt="" />
          <img className="w-[10px] h-[10px] m-[2px] " src={dot2} alt="" />
          <img className="w-[10px] h-[10px] m-[2px] " src={dot1} alt="" />
          <img className="w-[10px] h-[10px] m-[2px] " src={dot1} alt="" />
        </div>
      </section>
      <section className="w-[100%] text-white h-[500px] my-[40px] bg-[#054FB3] flex flex-col justify-start items-center ">
        <div className="w-[90%] h-[30%] flex flex-col justify-center items-center ">
          <p className="text-[8px] font-[500] ">Join our community</p>

          <span className="text-[24px] font-[700] font-clashDisplay ">
            Are you ready to connect{' '}
          </span>
          <span className="text-[24px] mt-[-10px] font-[700] font-clashDisplay">
            {' '}
            talent of the with the future
          </span>
          <span className="text-[24px] mt-[-10px] font-[700] font-clashDisplay">
            {' '}
            tech world
          </span>

          <p className="text-[8px] text-white font-[500] ">
            Meet up with other techstars and grow together
          </p>
        </div>
        <div className="w-[300px] h-[300px]  ">
          <WorldMap />
          {/* <img src={roundIcon} alt="" /> */}
        </div>
        <div className="w-[90%] h-[15%] flex justify-center items-center ">
          <button
            className="w-[110px] h-[27px] rounded-[4px] font-[700] bg-white text-[#004DB3] text-[8px] flex justify-center items-center "
            type="button"
          >
            Join our community
          </button>
        </div>
      </section>
      <section className="w-[100%] h-[70px] flex flex-col justify-start items-center ">
        <div className="w-[75%] flex justify-end items-center ">
          <img className="w-[9px] h-[8px] " src={roundIcon} alt="" />
        </div>
        <div className="w-[85%] flex justify-center items-center text-[14px] text-[#000F24] font-[700] font-clashDisplay ">
          <p className=" ">Frequently asked questions</p>
        </div>
        <p className="text-[8px] text-[#A1A1A1] font-[500] ">
          High-defination video is video of higher resolution and quality than
          standard definition. while <br /> there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </section>
      <section className="w-[100%] h-auto mb-[10px] flex flex-col justify-center items-center ">
        <div className="w-[90%] flex justify-between items-center text-[24px] text-[#000F24] font-[700] font-clashDisplay ">
          <p className="text-[#004DB3] ">Is there a free trial available?</p>
          <p>-</p>
        </div>
        <div className="w-[90%] pb-[15px] flex justify-between items-center border-b border-[#EAEAEA] ">
          <p className=" text-[8px] text-[#A1A1A1] font-[500] ">
            High-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
        </div>
        <div className="w-[90%] h-[40px] font-[700] text-[#000F24] text-[8px] border-b border-[#EAEAEA] flex justify-between items-center ">
          <p>Can i change my plan later?</p>
          <p>+</p>
        </div>
        <div className="w-[90%] h-[40px] font-[700] text-[#000F24] text-[8px] border-b border-[#EAEAEA] flex justify-between items-center ">
          <p>Are the courses lifetime?</p>
          <p>+</p>
        </div>
        <div className="w-[90%] h-[40px] font-[700] text-[#000F24] text-[8px] border-b border-[#EAEAEA] flex justify-between items-center ">
          <p>Do i get certified after taking courses?</p>
          <p>+</p>
        </div>
        <div className="w-[90%] h-[40px] font-[700] text-[#000F24] text-[8px] border-b border-[#EAEAEA] flex justify-between items-center ">
          <p>How do i reach out to mentors?</p>
          <p>+</p>
        </div>
        <div className="w-[90%] h-[40px] font-[700] text-[#000F24] text-[8px] border-b border-[#EAEAEA] flex justify-between items-center ">
          <p>Do we get job ready after taking courses?</p>
          <p>+</p>
        </div>
      </section>
      <footer className="w-[100%] h-[900px] text-white bg-[#000F24] flex justify-center items-center ">
        <div className="w-[85%] h-[100%] flex flex-col justify-center items-center ">
          <ul className="w-[100%] h-[20%] ">
            <li className="text-[30px] cursor-pointer font-amazingKids font-[400] mb-[20px] ">
              TimeTime{' '}
            </li>
            <li className="text-[14px] font-[400] mb-[10px] ">
              Reach out to us on any of our social <br /> media networks
            </li>
            <ul className="flex justify-start items-center ">
              <li>
                <img
                  className="w-[32px] h-[31px] mr-[7px] cursor-pointer "
                  src={facebookLogo}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[31px] h-[25px] mr-[7px] cursor-pointer "
                  src={twitterLogo}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[32px] h-[22px] mr-[7px] cursor-pointer "
                  src={youtubeLogo}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[32px] h-[32px] mr-[7px] cursor-pointer "
                  src={instagramLogo}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="w-[32px] h-[24px] cursor-pointer "
                  src={eyeglassShape}
                  alt=""
                />
              </li>
            </ul>
          </ul>
          <ul className="w-[100%] h-[28%] text-[16px] font-[400] ">
            <li className="mb-[20px] text-[24px] font-[600] font-clashDisplay ">
              Useful links
            </li>
            <li className="mb-[10px] ">Home</li>
            <li className="mb-[10px] ">About us</li>
            <li className="mb-[10px] ">Our courses</li>
            <li className="mb-[10px]  ">Testimonials</li>
            <li className="mb-[10px]  ">Our community</li>
          </ul>
          <ul className="w-[100%] h-[28%] text-[16px] font-[400] ">
            <li className="mb-[20px] text-[24px] font-[600] font-clashDisplay ">
              Community
            </li>
            <li className="mb-[10px] ">Help centers</li>
            <li className="mb-[10px] ">Partners</li>
            <li className="mb-[10px] ">Suggestion</li>
            <li className="mb-[10px] ">Blog</li>
            <li className="mb-[10px] ">Newsletter</li>
          </ul>
          <ul className="w-[100%] h-[12%] flex flex-col justify-center items-start ">
            <li className="mb-[20px] text-[24px] font-[600] font-clashDisplay ">
              Subscribe us
            </li>
            <li className="flex justify-center items-center ">
              <input
                type="text"
                placeholder="doyinapollos@gmail.com"
                className="w-[230px] h-[46px] text-[12px] border border-[#054FB3] bg-[#000F24] p-[7px] "
              />
              <button
                className="w-[100px] h-[46px] font-[500] bg-[#054FB3] text-white text-[10px] flex justify-center items-center "
                type="button"
              >
                Send message
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Mobile;
