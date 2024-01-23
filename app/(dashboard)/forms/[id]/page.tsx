import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";
import FormLinkShare from "@/components/FormLinkShare";
import VisitBtn from "@/components/VisitBtn";
import React from "react";
import { StatsCard } from "../../page";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";

async function FormDetailPage({ params }: { params: { id: string } }) {
   const { id } = params;
   const form = await GetFormById(Number(id));
   if (!form) {
      throw new Error("form not found");
   }

   const { visits, submissions } = form;

   let submissionsRate = 0;

   if (visits > 0) {
      submissionsRate = (submissions / visits) * 100;
   }

   const bounceRate = 100 - submissionsRate;
   return (
      <>
         <div className="py-10 border-b border-muted">
            <div className="flex justify-between container">
               <h1 className="text-4xl font-bold truncate">{form.name}</h1>
               <VisitBtn shareUrl={form.shareURL} />
            </div>
         </div>
         <div className="py-4 border-b border-muted">
            <div className="container flex gap-2 items-center justify-between">
               <FormLinkShare shareUrl={form.shareURL} />
            </div>
         </div>
         <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container">
            <StatsCard
               className="shadow-md shadow-blue-600"
               title="Total visits"
               icon={<LuView className="text-blue-600" />}
               helperText="All time from visits"
               value={visits.toLocaleString() || ""}
               loading={false}
            />

            <StatsCard
               className="shadow-md shadow-yellow-600"
               title="Total Submissions"
               icon={<FaWpforms className="text-yellow-600" />}
               helperText="All time from submissions"
               value={submissions.toLocaleString() || ""}
               loading={false}
            />

            <StatsCard
               className="shadow-md shadow-green-600"
               title="Submission Rate"
               icon={<HiCursorClick className="text-green-600" />}
               helperText="Visits that result in form submission"
               value={submissionsRate.toLocaleString() + "%" || ""}
               loading={false}
            />

            <StatsCard
               className="shadow-md shadow-red-600"
               title="Bounce Rate"
               icon={<TbArrowBounce className="text-red-600" />}
               helperText="Visits that leaves without interacting"
               value={visits.toLocaleString() + "%" || ""}
               loading={false}
            />
         </div>
         <div className="container pt-10">
            <SubmissionsTable id={form.id} />
         </div>
      </>
   );
}

export default FormDetailPage;

function SubmissionsTable({ id }: { id: number }) {
   return (
      <>
         <h1 className="text-2xl font-bold my-4">Submissions</h1>
      </>
   );
}