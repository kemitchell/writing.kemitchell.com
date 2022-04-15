---
title: Useful Word Macros for Lawyers
---

The only commendable features:
- 12-Point Times New Roman Font
- Bold Type
- Italic Type
- Paragraph Left and Right Indentation, in increments of 0.5"
- Paragraph First Line Indentation, in increments of 0.5"
- Page Breaks

```vbscript
Sub AllNumbersToText()
    ActiveDocument.ConvertNumbersToText
End Sub
```

```vbscript
Sub AdoptAllComments()
    Dim comment As comment
    For Each comment In ActiveDocument.Comments
        comment.Author = "Kyle E. Mitchell"
        comment.Initial = "KEM"
    Next comment
End Sub
```

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
