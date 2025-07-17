import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// export const createPatient=async(req,res)=>{
//     const {userId,firstName,lastName,email,DOB,bloodGroup,address}=req.body;
//     const profilePhoto = req.file ? req.file.path : null;
//     try {
//         const patient=await prisma.patient.create({
//             data:{
//                 userId,
//                 firstName,
//                 email,
//                 lastName,
//                 address,
//                 DOB,
//                 bloodGroup,
//                 profilePhoto
//             }
//         })
//           res.status(201).json(patient);
//     } catch (error) {
//        res.status(400).json({ error: error.message });
//     }

// }

export const updatePatient = async (req, res) => {
  const id = req.params.id;
  console.log("idd: ", id);
  const { firstName, lastName, email, DOB, bloodGroup, address, phone, age } =
    req.body;

  try {
    const updatedPatient = await prisma.patient.update({
      where: {  id },
      data: {
        firstName,
        lastName,
        email,
        DOB,
        bloodGroup,
        address,
        phone,
        age,
      },
    });
    console.log("userrrrid:::", updatedPatient.userId);
    res
      .status(200)
      .json({ msg: "Patient updated successfully", updatedPatient });
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).json({ error: error.message });
  }
};
