import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import '../assets/euls.css'
function Eula() {
  return (
    <div className="container">
      <div className="col-lg-7">
        <h1 className="py-5">End User Legal Agreement</h1>
        <p>IMPORTANT:</p>
        <p>PLEASE CAREFULLY READ THE FOLLOWING LEGAL AGREEMENT</p>
        <p>
          PLEASE NOTE THAT SEVERAL SECTIONS ARE LOCALIZED FOR EUROPE IN ORDER TO
          COMPLY WITH LOCAL LAWS AND THAT THESE SECTIONS SHALL ONLY APPLY TO
          CUSTOMERS WHO ACQUIRED THE SOFTWARE IN EUROPE
        </p>
        <p>
          This End User License Agreement (the “EULA”) is a legal agreement
          between you (either in your individual capacity, or on behalf of an
          entity), hereafter sometimes referred to as “you,” “Licensee,” or “End
          User” and Ableton AG (“Ableton”) in order to give you a license to use
          the Software as set forth in this Agreement under the conditions in
          this Agreement, as well as to use the additional (mandatory) services
          provided by Ableton or by third parties for paying customers. This
          EULA has no relation to your purchase agreement when you bought the
          Software (e.g. in retail or via the internet).
        </p>
        <p>
          By clicking the acceptance button that follows this EULA and/or
          installing and/or otherwise using the Software (as defined below), you
          acknowledge that you have read this EULA, understand its terms and
          conditions, and agree to be bound by such terms and condition. If you
          are accepting the EULA on behalf of a corporation or other entity, you
          declare that you are authorized to do so.
        </p>
        <ol className="header">
          <li className="fw-bold fs-2 header">
            Definitions
            <div className="fs-6 fw-normal">
              <p>
                1.a The term "Live" means Ableton Live and all presets, sound
                samples, musical examples, video files, included software
                instruments and effects, data and other contents or read-only
                versions of other Ableton products supplied by Ableton with the
                Software. The term “Live” also includes Ableton Suite, Ableton
                Live Intro, any updates, upgrades, LE versions, Lite Versions,
                OEM versions or modified versions of Live licensed to the
                Licensee by Ableton.
              </p>
              <p>
                1.b The term “Extension” means any add-on to Live with a serial
                number supplied separately by Ableton to the Licensee, and all
                updates and upgrades to the add-on.
              </p>
              <p>1.c The term “Software” means Live and all Extensions.</p>
              <p>
                1.d The term “Ableton Suite” means the combination of Ableton
                Live and other products that are licensed as a bundle to
                Licensee with Live.
              </p>
              <p>
                1.e The term “User Account” means the online account that is
                necessary for the registration and authorization, for details
                please see:{" "}
                <Link to="/login" className="text-decoration-none">
                  www.ableton.com/signup
                </Link>
              </p>
              <p>
                1.f The term “Consumer” means a Licensee who is a natural person
                who licensed the Software for a purpose which can be regarded as
                being outside his/her trade or profession.
              </p>
              <p>
                1.g The term “Free Version” means Software that is provided by
                Ableton to you for free, including Lite Versions, OEM versions
                and Trial Versions.
              </p>
            </div>
          </li>
          <li className="header fw-bold fs-3">
            Ownership/Intellectual Property Rights
            <div className="fs-6 fw-normal">
              <p>
                2.a You, as Licensee, through your downloading, installing,
                copying or use of this product do not acquire any ownership
                rights to the Software. The Software is protected by copyright
                laws and international copyright treaties, as well as other
                intellectual property laws and treaties. The rights to use the
                Software as set out in this Agreement are licensed, not sold, to
                you by Ableton.
              </p>
              <p>
                2.b Trademarks contained in the Software are trademarks or
                registered trademarks of Ableton AG in Germany, the United
                States and/or other countries. Third party trademarks, trade
                names, product names and logos may be the trademarks or
                registered trademarks of their respective owners. You may not
                remove or alter any trademark, trade names, product names, logo,
                copyright or other proprietary notices, legends, symbols or
                labels in the Software. This EULA does not authorize you to use
                Ableton's or its licensors' names or any of their respective
                trademarks.
              </p>
              <p>
                2.c NB.: THIS CLAUSE DOES NOT APPLY IF YOU ACQUIRED THE SOFTWARE
                IN EUROPE{" "}
              </p>
              <ol className="list-unstyled">
                <li>
                  i. As between you and Ableton, Ableton is the owner of all
                  right, title and interest in and to the Software (including
                  all copyrights, trademarks and patents) regardless of the
                  media or form of the Software; whether online, by disk or
                  otherwise.
                </li>
                <li>
                  ii. Licensee shall not, at any time during or after the
                  effective Term of the EULA, dispute or contest, directly or
                  indirectly, Ableton’s exclusive right and title to the
                  Software or the validity thereof.
                </li>
                <li>
                  iii. You shall not attempt to develop any Software that
                  contains the “look and feel” of any of the Software, or is
                  otherwise derivative of the Software.
                </li>
              </ol>
            </div>
          </li>
          <li className="header fw-bold fs-3">
            License grant
            <div className="fs-6 fw-normal">
              <p>3.a Under the condition that:</p>
              <ol className="list-unstyled">
                <li>
                  i. the Licensee has legally acquired the ownership of the data
                  carrier containing the Software (other than by an acquisition
                  of ownership “in good faith”) or purchased the product key and
                  received the allowance to download the Software by Ableton or
                  an authorized dealer, and
                </li>
                <li>ii. paid the applicable price, and</li>
                <li>iii. is using an authorized copy of the Software, and</li>
                <li>iv. has registered and is holding a valid User Account.</li>
              </ol>
              <p>
                Ableton grants the Licensee a limited, non-exclusive license to
                use and copy the Software for use on his or her computer system
                or file server for local use within the Licensee’s network. This
                network must be owned, leased and/or controlled by the Licensee
                or a member of the Licensee’s corporate group, which includes a
                corporate Licensee, a corporate Licensee's majority-owned
                subsidiaries, any parent company having a majority-owned
                interest in such corporate licensee, and such parent's
                majority-owned subsidiaries.
              </p>
              <p>
                3.b The Licensee may transfer the Software from one computer to
                another over his or her network but may not copy it to
                additional sites outside the network or make additional copies
                for use on other networks or sites. The Software may only be
                used on one computer at a time. All Live products included
                within the respective edition of Ableton Suite are part of the
                same License granted by Ableton and can only be used as a single
                bundle on one computer at a time. The Licensee may make one
                backup copy of the Software.
              </p>
            </div>
          </li>
          <li className="header fw-bold fs-3">
            Activation of Software and User Account:
            <div className="fs-6 fw-normal">
              <p>
                In order to use the Software, you must register the Software and
                connect it to a User Account and receive an unlock key. You can
                register and activate the Software online or offline. The
                offline registration and unlock process require that you
                download and transfer the unlock key to the computer on which
                you have installed the Software. For further information, you
                can visit Ableton’s website at{" "}
                <Link to="/help" className="text-decoration-none">
                  www.ableton.com/support.
                </Link>{" "}
                The transfer or assignment of the User Account is prohibited
                without the express consent of Ableton.
              </p>
            </div>
          </li>
          <li className="header fw-bold fs-3">
            License restrictions
            <div className="fs-6 fw-normal">
              <p>
                5.a You may not translate, reverse engineer, decompile,
                disassemble, or create derivative works from the Software or
                provide the Software as “software as a service”.
              </p>
              <p>
                5.b You may not use, copy, modify or transfer the Software, or
                any copy in whole or in part, except as expressly provided for
                in this license.
              </p>
              <p>
                You may not reformat, mix, filter, re-synthesize or otherwise
                alter the presets, sound samples and musical examples contained
                to the Software for use in any kind of commercial sampling
                product/package or software without the express written consent
                of Ableton. You may however use the presets, sound samples or
                musical examples contained in the Software to create your own
                original musical compositions, provided that additional material
                is added, and the respective presets, sound samples and musical
                examples will be significantly transformed. You may neither use
                the Demo Songs in your musical composition nor may you reformat,
                mix, filter, re-synthesize or otherwise alter the Demo Songs.
              </p>
              <p>
                5.d The Software may be used to reproduce materials and prepare
                derivative works therefrom. It is licensed to you only for
                reproduction and preparation of derivative works of
                non-copyrighted materials, materials in which you own the
                copyright, or materials you are authorized or permitted by law
                to reproduce and prepare derivative works from.
              </p>
              <p>
                5.e All within this Section 5 is subject to the extent that the
                Licensee is granted the right by law to decompile software in
                order to obtain information necessary to render the Software’s
                interoperable with other software; the same applies to reverse
                engineering, decompilation, and disassembly of Software.
              </p>
            </div>
          </li>
          <li className="header fw-bold fs-3">
            Restrictions on transfer
            <div className="fs-6 fw-normal">
              <p>
                6.a You may not rent, lease or sublicense the Software on a
                temporary or permanent basis. You may, however, transfer the
                license to use the Software as a whole to another person or
                entity, provided that
                <ol className="list-unstyled">
                  <li>
                    i. you completely uninstall the Software from your computer
                    or network, do not retain any backup copy of the Software
                    (or its components), and
                  </li>
                  <li>ii. transfer this EULA with the Software, and </li>
                  <li>
                    iii. any such transferee will be bound by this EULA, and you
                    will remain secondarily liable, and{" "}
                  </li>
                  <li>
                    iv. the transferee registers for an User Account and
                    activates the Software (while your installation will be
                    unregistered).
                  </li>
                </ol>
                <p>
                  For further information visit Ableton’s website at
                  <Link to="/help" className="text-decoration-none">
                    www.ableton.com/support.
                  </Link>
                </p>
              </p>
              <p>
                1.b The term “Extension” means any add-on to Live with a serial
                number supplied separately by Ableton to the Licensee, and all
                updates and upgrades to the add-on.
              </p>

              <p>
                6.c The license to use the versions of Ableton Live Lite and in
                other OEM versions may not be sold or transferred without the
                prior consent of Ableton.
              </p>
              <p>
                6.d The license to use Ableton Suite may only be sold or
                transferred as a whole. The right to use the Live products
                included within the Ableton Suite may not be sold or transferred
                separately.
              </p>
              <p>
                6.e The license to try out Software with an unrestricted feature
                set for a limited trial period of thirty days (“Trial License”)
                is limited to a one time-use per user and per hardware device.
                The Licensee may not re-register under a different name,
                different account, or from a different hardware device. Only one
                user may register per hardware device.
              </p>
              <p>
                6.f If you transfer possession of any copy of the Software to
                another person or entity except as described above, this license
                is automatically terminated.
              </p>
              <p><Link to='https://cdn-resources.ableton.com/resources/fb/cf/fbcf55b9-202b-49b0-8ebf-4173bca1aeeb/20171026_eula_en.pdf' className='text-decoration-none pb-5'>PDF Download</Link></p>
            </div>

          </li>
        </ol>
      </div>
      <hr className='my-5' />
      <Footer />
    </div>
  );
}

export default Eula