"use client";

import * as React from "react";
import { Button } from "./Button";
import { ChallengeFormComponentProps } from "@/@types/global";

export const ChallengeForm: React.FC<ChallengeFormComponentProps> = ({ submitType, handleFormChange, handleClearForm, handleSubmitForm, errors = {}, values = {}, skills }) => {
    return (
        <form className="w-full sm:space-y-4">
            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="challengeName" className="text-sm text-[#475367]">Challenge/Hackathon Title</label>
                <input type="text" name="challengeName" value={values.challengeName} id="challengeName" className="inputText" onChange={handleFormChange} placeholder="Enter title" />
                <small className="text-[#d3302f]">{errors.challengeName}</small>
            </div>

            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="duration" className="text-sm text-[#475367]">Duration</label>
                    <input type="number" name="duration" value={values.duration} id="duration" className="inputText" onChange={handleFormChange} placeholder="Duration" />
                    <small className="text-[#d3302f]">{errors.duration}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="endDate" className="text-sm text-[#475367]">Deadline</label>
                    <input type="date" name="endDate" value={values.endDate} id="endDate" className="inputText" onChange={handleFormChange} placeholder="Date" />
                    <small className="text-[#d3302f]">{errors.endDate}</small>
                </div>
            </div>
            
            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="moneyPrize" className="text-sm text-[#475367]">Prize Money</label>
                    <input type="text" name="moneyPrize" value={values.moneyPrize} id="moneyPrize" className="inputText" onChange={handleFormChange} placeholder="Prize money" />
                    <small className="text-[#d3302f]">{errors.moneyPrize}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="contactEmail" className="text-sm text-[#475367]">Contact Email</label>
                    <input type="contactEmail" name="contactEmail" value={values.contactEmail} id="email" className="inputText" onChange={handleFormChange} placeholder="Email" />
                    <small className="text-[#d3302f]">{errors.contactEmail}</small>
                </div>
            </div>

            {/* <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="skills" className="text-sm text-[#475367]">Skills</label>
                    <select name="skills" value={["Frontend","Backend", "UI/UX"]} multiple id="skills" className="inputText" onChange={handleFormChange} >
                        <option value="None">Select skill</option>
                        {skills.map((item, index) => (<option key={index} value={["Frontend","Backend", "UI/UX"]}>{item.skillName}</option>))}
                    </select>
                    <small className="text-[#d3302f]">{errors.skills}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="seniority" className="text-sm text-[#475367]">Seniority level</label>
                    <select name="seniority" value={values.seniority} id="seniority" className="inputText">
                        <option value="None">Select seniority level</option>
                        {["junior", "intermediate", "senior"].map(item => (<option key={item} value={values.seniority}>{item}</option>))}
                    </select>
                    <small className="text-[#d3302f]">{errors.seniority}</small>
                </div>
            </div> */}

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="projectDescription" className="text-sm text-[#475367]">Project Description</label>
                <textarea id="projectDescription" name="projectDescription" value={values.projectDescription} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.projectDescription}</small>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="projectBrief" className="text-sm text-[#475367]">Project Brief</label>
                <textarea id="projectBrief" name="projectBrief" value={values.projectBrief} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.projectBrief}</small>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="projectTasks" className="text-sm text-[#475367]">Project Description & Tasks</label>
                <textarea id="projectTasks" name="projectTasks" value={values.projectTasks} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.projectTasks}</small>
            </div>

            {/* <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="deliverables" className="text-sm text-[#475367]">Deliverables</label>
                <textarea id="deliverables" name="deliverables" value={values.deliverables} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.deliverables}</small>
            </div> */}

            <div className="w-full flex justify-between">
                <Button classNames={`w-[200px] bg-white text-primary border border-primary sm:text-sm font-bold p-3`} label={"Cancel"} onClick={handleClearForm} />
                <Button classNames={`w-[200px] bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-3`} label={`${submitType === "create" ? "Create Challenge" : "Update Challenge"}`} onClick={handleSubmitForm} />
            </div>
        </form>
    )
}