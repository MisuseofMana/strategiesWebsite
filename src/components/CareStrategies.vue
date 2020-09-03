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

                <h2>Welcome Home to Brookside Care Strategies</h2>

                <p>
                   Brookside Care Strategies is a 42-bed behavioral health nursing facility located in Muncie, Indiana. Owned and operated by <strong>Clinicians</strong>, Brookside Care Strategies’ number one priorities are the health, safety, and happiness of your loved ones. Proficient in Individualized Care Planning, Behavior Management, and an interdisciplinary team approach to care, our staff members are well prepared to welcome your loved one home.
                </p>

                <p>
                    At Brookside Care Strategies, we believe interaction and engagement are paramount to the health and well-being of our residents. Residents are offered a multitude of opportunities to engage with our community. Activities, including morning coffee and social time, bingo, bowling, cornhole, and a litany of others, are offered to enhance the home-like feel of our community.    
                </p>
                
                <h2>
                    Our Mission:
                </h2>

                <p>
                    The Brookside Care Strategies Mission is to enrich the lives of loved ones by providing a caring, compassionate, and safe home environment.
                </p>
            </el-col>

            <el-col :span="12">
                <h2>Services</h2>

                <ul>
                  <li>
                      Comprehensive Care for Clinically Complex Residents
                  </li>
                  <li>
                      Well-Round Clinical Assessments
                  </li>
                  <li>
                      Psychiatric Management
                  </li>
                  <li>
                    Individualized Care Plans
                  </li>
                  <li>
                      Nutritional Management

                  </li>
                  <li>
                      Social and Recreational Activities

                  </li>
                  <li>
                      Onsite Physical and Occupational Therapy provided by Rehab Strategies

                  </li>
                  <li>
                      Onsite Physician Services

                  </li>
                  <li>
                      Vision, Dental, Audiology, &amp; Podiatry Services

                  </li>
                  <li>
                      Hospice Care

                  </li>
                  <li>
                      Hair Dressing Services

                  </li>
                  
                </ul>

                <h2>Technology</h2>

                <ul>
                    <li>PointClickCare – Documentation Software</li>
                    <li>PayCor -Payroll Monitoring Software</li>
                    <li>Payroll Based Journal Reporting – Quarterly Reports generated and provided to the facility.</li>
                </ul>

            <h2>
                Employment Opprotunities
            </h2>
            <p>
                Brookside Care Strategies hires well-qualified, energetic staff members with a passion for long-term care. As staff members, you will be expected to dedicate your talents to the health and well-being of the residents we serve and the long-term, overall success of the facility.
            </p>

            <h2>
            Open Positions: 
            </h2>
            
            <p>
                If you are interested in joining our team, submit your application below.
            </p>

            <ul>
                <li>Nursing-(CNA, LPN, RN)</li>
                <li>Position A</li>
                <li>Position B</li>

                <li>Dietary</li>
                <li>Housekeeping/Laundry</li>
                <li>Maintenance</li>
            </ul>

                <el-button icon="el-icon-document" type="primary">Apply To Care Strategies Online</el-button>
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