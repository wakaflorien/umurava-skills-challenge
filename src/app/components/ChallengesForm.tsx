"use client";

import * as React from "react";
import { Button } from "./Button";
import { ChallengeFormComponentProps } from "../@types/global";

export const ChallengeForm: React.FC<ChallengeFormComponentProps> = ({ submitType, handleFormChange, handleClearForm, handleSubmitForm, errors = {}, values = {} }) => {
    return (
        <form className="w-full sm:space-y-4">
            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="title" className="text-sm text-[#475367]">Challenge/Hackathon Title</label>
                <input type="text" name="title" value={values.title} id="title" className="inputText" onChange={handleFormChange} placeholder="Enter title" />
                <small className="text-[#d3302f]">{errors.title}</small>
            </div>

            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="deadline" className="text-sm text-[#475367]">Deadline</label>
                    <input type="date" name="deadline" value={values.deadline} id="deadline" className="inputText" onChange={handleFormChange} placeholder="Date" />
                    <small className="text-[#d3302f]">{errors.deadline}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="duration" className="text-sm text-[#475367]">Duration</label>
                    <input type="text" name="duration" value={values.duration} id="duration" className="inputText" onChange={handleFormChange} placeholder="Duration" />
                    <small className="text-[#d3302f]">{errors.duration}</small>
                </div>
            </div>

            <div className="flex sm:flex-row sm:gap-2 font-medium">
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="prize" className="text-sm text-[#475367]">Prize Money</label>
                    <input type="text" name="prize" value={values.prize} id="prize" className="inputText" onChange={handleFormChange} placeholder="Prize" />
                    <small className="text-[#d3302f]">{errors.prize}</small>
                </div>
                <div className="w-1/2 flex sm:flex-col sm:gap-2 font-medium">
                    <label htmlFor="email" className="text-sm text-[#475367]">Contact Email</label>
                    <input type="email" name="email" value={values.email} id="email" className="inputText" onChange={handleFormChange} placeholder="Email" />
                    <small className="text-[#d3302f]">{errors.email}</small>
                </div>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="description" className="text-sm text-[#475367]">Project Description</label>
                <textarea id="description" name="description" value={values.description} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.description}</small>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="brief" className="text-sm text-[#475367]">Project Brief</label>
                <textarea id="brief" name="brief" value={values.brief} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.brief}</small>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="tasks" className="text-sm text-[#475367]">Project Description & Tasks</label>
                <textarea id="tasks" name="tasks" value={values.tasks} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.tasks}</small>
            </div>

            <div className="flex sm:flex-col sm:gap-2 font-medium">
                <label htmlFor="deliverables" className="text-sm text-[#475367]">Deliverables</label>
                <textarea id="deliverables" name="deliverables" value={values.deliverables} className="inputText" rows={4} onChange={handleFormChange} placeholder="Enter text here ..." />
                <span className="text-tertiaryColor/60 text-sm">Keep this simple of 250 character</span>
                <small className="text-[#d3302f]">{errors.deliverables}</small>
            </div>

            <div className="w-full flex justify-between">
                <Button classNames={`w-[200px] bg-white text-primary border border-primary sm:text-sm font-bold p-3`} label={"Cancel"} onClick={handleClearForm} />
                <Button classNames={`w-[200px] bg-primary hover:bg-primary/90 text-white sm:text-sm font-bold p-3`} label={`${submitType === "create" ? "Create Challenge" : "Update Challenge"}`} onClick={handleSubmitForm} />
            </div>
        </form>
    )
}