<template>
<div>
     <el-main>

         <el-row :gutter="40">
            <el-col :span="24">
                <h1>Innovative Care Strategies</h1>
            </el-col>
        </el-row>

          <el-row :gutter="40">
            <el-col :span="12">
                
                <el-image
                    :src="careUrl"
                    fit="fill">
                </el-image>

                <h2>Welcome to Rehab Strategies – “A Trustworthy, Reliable Provider of Therapy Services Since 2007”</h2>

                <p>
                    Rehab Strategies is a provider of Physical, Occupational and Speech Therapy in addition to in-house
                    Wellness Direction. We proudly offer our expertise to Hospitals, Outpatient Centers, Skilled Nursing
                    Facilities, Assisted and Independent Living Centers. Owned and operated by Therapists, Rehab
                    Strategies builds and provides therapy teams that are highly motivated, efficient and produce cost-
                    effective outcomes.
                </p>    
                
                <h2>
                    A Partnership Built Upon Trust
                </h2>

                <p>
                    When you partner with Rehab Strategies you will enjoy a fully turnkey experience. We provide staff
                    oversite, recruiting and hiring processes, including management that understands all aspects of Rehab.
                    We cover all payroll taxes and benefits for our therapists. Our contract is configured to assure that our
                    clients receive a guaranteed profit from our Therapy Services.
                </p>
            </el-col>

            <el-col :span="12">
                


                <h2>Accountability and Performance</h2>

                <ul>
                  <li>Higher Standards – Highly ethical clinical practice so you can rest easy.</li>
                  <li>Oversite – Onsite Management provided by experienced Directors of Rehab.</li>
                    <li>Results – Improved Clinical Outcomes, Guaranteed Profit, Revenue Enhancement in addition to
new lines of service.</li>
                    <li>Medicare Part B Provider</li>
                </ul>

                <h2>Technology</h2>

                <ul>
                    <li>CASAMBA - Therapy Software – Practice Management Software</li>
                    <li>OnusOne – Web Based, Shared-Risk Employee Compensation Program</li>
                    <li>Equipment – Access to Therapy Equipment provided by ITS [insert link to ITS webpage]</li>
                    <li>Payroll Based Journal Reporting – Quarterly Reports generated and provided to the facility.</li>
                </ul>

                <h2>Clinical Programs</h2>

                <ul>
                    <li>Rock Steady</li>
                    <li>The Climb</li>
                    <li>Wellness Direction</li>
                </ul>

                <h2>Consultation Services</h2>

                <p>Rehab Strategies offers up a comprehensive consultation service package for facilities that wish to set
up and run their own Rehab department. We provide guidance thru the following phases:</p>

                <ul>
                    <li>Management Systems and Tools</li>
                    <li>Efficient Staffing Models</li>
                    <li>Philosophy/Culture Training</li>
                    <li>Delivery of Care Training</li>
                </ul>

                <h2>Work for Rehab Strategies - we offer:</h2>

                <ul>
                    <li>Clinical Freedom</li>
                    <li>Professional Growth</li>
                    <li>Annual CEU Allotment</li>
                    <li>Generous PTO Accrual</li>
                    <li>Medical, Dental, Vision, Life and Disability Insurance</li>
                </ul>

                <el-button icon="el-icon-document" type="primary">Apply To Rehab Strategies Online</el-button>
            </el-col>
          </el-row>
        </el-main>

        <el-footer height="300px;">
          <div>
              <h2>Find Us</h2>
              <p>Our Address Here</p>
              <p>Our Address Here</p>
              <p>Our Address Here</p>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>Phone Number Here</p>
            <p>Toll Free Number</p>
            <p>Fax</p>
            <p>Email Address</p>
          </div>
          <div>
            <h2>Photography</h2>
            <ul>
              <li><span><a href="https://unsplash.com/@jameshosejr?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">James Hose Jr</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
            </ul>
          </div>

        </el-footer>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                careUrl: require('@/assets/imgs/elderly2.jpg')
            }
        },
    }
</script>

<style scoped>

</style>