---
title: Useful Word Macros for Lawyers
description: taming comments, styles, fields, and numbering
---

The only commendable features:
- 12-Point Times New Roman Font
- Bold Type
- Italic Type
- Paragraph Left and Right Indentation, in increments of 0.5"
- Paragraph First Line Indentation, in increments of 0.5"
- Page Breaks

## Mark All Comments Under Your Name

```vbscript
Sub AdoptAllComments()
    Dim comment As comment
    For Each comment In ActiveDocument.Comments
        comment.Author = "Kyle E. Mitchell"
        comment.Initial = "KEM"
    Next comment
End Sub
```

## Convert Styles to Regular Formatting

```vbscript
Sub StylesToFormatting()
    Dim paragraph As paragraph
    Dim font As font
    Dim format As ParagraphFormat
    For Each paragraph In ActiveDocument.Paragraphs
        With paragraph
            If .Style <> ActiveDocument.Styles("Normal") Then
                Set font = .Style.font
                Set format = .Style.ParagraphFormat
                .Style = ActiveDocument.Styles("Normal")
                .Range.font = font
                .Range.ParagraphFormat = format
            End If
        End With
    Next
End Sub
```
## Convert Automatic Numbers to Regular Text

```vbscript
Sub AllNumbersToText()
    ActiveDocument.ConvertNumbersToText
End Sub
```

## Remove All Content Control Boxes


```vbscript
Sub RemoveAllContentControls
	For Each ContentControl In ActiveDocument.ContentControls
  	ContentControl.Delete
  Next
End Sub
```

## Convert Fields to Regular Text

Word actually has a built-in shortcut to do this. Select all text with Ctrl+A, then hit Ctrl+Shift+F9.
