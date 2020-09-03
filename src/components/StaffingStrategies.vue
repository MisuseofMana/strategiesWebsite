<template>
<div>
      <el-main>

        <el-row :gutter="40">
            <el-col :span="24">
              <h1>Staffing Strategies</h1>
            </el-col>
        </el-row>

          <el-row :gutter="40">
            <el-col :span="12">

                <el-image
                    :src="cityUrl"
                    fit="fill">
                  </el-image>

                  <h2>We are "Staffing Strategies"</h2>

                  <p>Staffing Strategies was born out of a need for supplemental staff for our sister company, Rehab
Strategies. We first established a solid therapy/nursing pool with a reputation for quality and reliability.
We then began selectively offering our services to other facilities with the same high-quality standards.
Our promise to our client is that we would never place a therapist or nurse in their facility that we would
not place in our own Rehab Strategies or Care Strategies facilities.</p>
            </el-col>

            <el-col :span="12">
                <h1>
                  We hire, we work, we share our staff
                </h1>

                <h2>Are You Looking for a Hero?</h2>

                <p>Our partners contact us when they need to supplement staff. We develop close relationships with our
client partners and tailor our services to their immediate needs. Consider us your staffing RESCUE
SQUAD – we are here when you need us - for as little as two hours up to 13-week assignments. In
addition to providing additional staff we provide RELIEF and peace of mind.
As a Staffing Strategies client partner, you will have access to dependable, professional, and fully vetted
staff. All nursing and therapy staff are subjected to the following:</p>

                <ul>
                  <li>Pre-Employment Background Screen</li>
                  <li>Pre-Employment Drug Screen</li>
                  <li>TB Test</li>
                  <li>License Verification</li>
                  <li>Monthly OIG Sanction Checks</li>
                  <li>CPR Card</li>
                  <li>Job Description</li>
                  <li>Hep B Acknowledgement</li>
                  <li>Flu Acknowledgement</li>
                  <li>Confidentiality Agreement</li>
                </ul>


                <h2>Click below for to schedule a meeting with us.</h2>

<el-button type="primary">
  <i class="el-icon-s-order"></i>
  Meet With our Staffing Coordinator</el-button>


            </el-col>
          </el-row>
        </el-main>

         <el-footer height="300px;">
          <div>
            <h2>Get In Touch</h2>
              <p>Our Address Here</p>
              <p>Our Address Here</p>
              <p>Phone Number Here</p>
              <p>Email Address</p>
          </div>
          <div>
            <h2>CONTACT INFO</h2>
            <p>Phone Number Here</p>
            <p>Toll Free Number</p>
            <p>Fax</p>
            <p>Email Address</p>
          </div>
          <div>
            <h2>Photography</h2>
            <ul>
              <li>
<span><a href="https://unsplash.com/@samsonyyc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Samson</a> on <a href="https://unsplash.com/@samsonyyc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>                </li>
            </ul>
          </div>

        </el-footer>
        </div>

</template>

<script>
    export default {
        data() {
            return {
              cityUrl: require('@/assets/imgs/city.jpg')
            }
        },
    }
</script>

<style scoped>

</style>