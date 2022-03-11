import * as yup from 'yup';

export const validationSchema = [

    //1st step - Address Form
 yup.object({
    fullName : yup.string().required('full name is required'),
    address1 : yup.string().required('Address line 1 is required'),
    address2 : yup.string().required('Address line 2 is required'),
    city : yup.string().required(),
    state : yup.string().required(),
    zip : yup.string().required(),
    country : yup.string().required()
}),

    // 2ndStep - Review Form
yup.object(),


    //3rd Step -- Payment Form
yup.object({
        nameOnCard : yup.string().required()
})

]
